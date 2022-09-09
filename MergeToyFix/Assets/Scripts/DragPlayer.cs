using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DragPlayer : MonoBehaviour
{
    public int IndexCurrentGrid;
    public Material[] listSkinPlayer;

    public GameObject UnlockedPlayerPanel;
    public GameObject MainPanel;

    private Vector3 toDrag;

    public static DragPlayer instance;

    private Vector3 distance;   

    public bool isMouseDragging;
    public GameObject target;
    public GameObject playerDel;
    private Vector3 tempPosPlayer;

    private bool firstInteractionDone;

    void Start()
    {
        instance = this;
    }

    GameObject ReturnClickedObject(out RaycastHit hit)
    {
        GameObject targetObject = null;
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        if (Physics.Raycast(ray.origin, ray.direction * 10, out hit))
        {
            if (hit.collider.CompareTag("Player"))
            {
                targetObject = hit.collider.gameObject;
            }
        }
        return targetObject;
    }

    public bool isTutorialStep1;
    public bool isTutorialStep2; //long888
    void Update()
    {
        if (!CreateGridPlayer.instance.isStartFight)
        {
            Vector3 position = Vector3.zero;
            position = Input.mousePosition;

            if (Input.GetMouseButtonDown(0))
            {
                distance = Camera.main.ScreenToWorldPoint(new Vector3(position.x, position.y, Camera.main.WorldToScreenPoint(transform.position).z)) - transform.position;

                RaycastHit hitInfo;
                target = ReturnClickedObject(out hitInfo);
                if (target != null && target.CompareTag("Player") && target.GetComponent<PlayerController>() != null)
                {
                    tempPosPlayer = target.transform.position;
                    isMouseDragging = true;
                    target.GetComponent<PlayerController>().isSelected = true;
                }
            }

            bool isMerged = false;
            
            if (Input.GetMouseButtonUp(0))
            {
                if (target != null && target.CompareTag("Player") && target.GetComponent<PlayerController>() != null)
                {
                    if (!firstInteractionDone)
                    {
                        firstInteractionDone = true;
                        isTutorialStep1 = false;
                        isTutorialStep2 = true;
                    }

                    PlayerController playerController = target.GetComponent<PlayerController>();

                    if (playerController.isMovedPlayer)
                    {
                        if (playerController.CellSelectedObject != null)
                        {
                            target.transform.position = toDrag;
                            target.transform.position = new Vector3(
                                playerController.CellSelectedObject.transform.position.x,
                                target.transform.position.y,
                                playerController.CellSelectedObject.transform.position.z
                            );                            

                            EntityInfoPlayer info = CreateGridPlayer.instance.GetInfoPlayerFromList(
                             playerController.indexColumn,
                             playerController.indexRow);

                            if (playerDel != null)
                            {
                                if (playerDel != null &&
                                    playerDel.GetComponent<PlayerController>().typePlayer == playerController.typePlayer &&
                                    playerDel.GetComponent<PlayerController>().indexLevel == playerController.indexLevel &&
                                    playerDel.name == playerController.gameObject.name)
                                {
                                    playerController.CellSelectedObject.GetComponent<ItemGridControl>().listPlayerGrid = new List<GameObject>();

                                    EntityInfoPlayer info1 = CreateGridPlayer.instance.GetInfoPlayerFromList(playerDel.GetComponent<PlayerController>().indexColumn, playerDel.GetComponent<PlayerController>().indexRow);
                                    CreateGridPlayer.instance.listInfoPlayer.Remove(info1);
                                    CreateGridPlayer.instance.listAllPlayer.Remove(playerDel);

                                    if (info != null)
                                    {
                                        CreateGridPlayer.instance.listInfoPlayer.Remove(info);
                                        CreateGridPlayer.instance.listAllPlayer.Remove(target);

                                        playerController.indexColumn = playerController.CellSelectedObject.GetComponent<ItemGridControl>().indexColumn;
                                        playerController.indexRow = playerController.CellSelectedObject.GetComponent<ItemGridControl>().indexRow;
                                        info.indexColumn = playerController.indexColumn;
                                        info.indexRow = playerController.indexRow;
                                        info.indexLevel = playerController.indexLevel + 1;
                                        CreateGridPlayer.instance.listInfoPlayer.Add(info);
                                        CreateGridPlayer.instance.listAllPlayer.Add(target);
                                    }

                                    if (playerDel.GetComponent<PlayerController>().typePlayer == playerController.typePlayer &&
                                        playerDel.GetComponent<PlayerController>().indexLevel == playerController.indexLevel &&
                                        playerDel.GetComponent<PlayerController>().indexColumn == playerController.indexColumn &&
                                        playerDel.GetComponent<PlayerController>().indexRow == playerController.indexRow)
                                    {
                                        isMerged = true;
                                        SoundManager.instance.MergePlayerAudioBtn();
                                        Destroy(playerDel);
                                        playerDel = null;
                                        
                                        if (playerController.typePlayer == TYPE_PLAYER.ATK_PHEP)
                                        {
                                            PlayerController tempController = playerController;
                                            GameObject player = Instantiate(
                                                CreateGridPlayer.instance.listPlayerPhep[tempController.indexLevel + 1],
                                                tempController.transform.position,
                                                Quaternion.identity);
                                            
                                            player.GetComponent<PlayerController>().typePlayer = TYPE_PLAYER.ATK_PHEP;
                                            player.GetComponent<PlayerController>().indexLevel = tempController.indexLevel + 1;
                                            player.GetComponent<PlayerController>().indexColumn = tempController.indexColumn;
                                            player.GetComponent<PlayerController>().indexRow = tempController.indexRow;
                                            player.GetComponent<PlayerController>().LoadPlayer();
                                            
                                            player.transform.SetParent(CreateGridPlayer.instance.ParentListPlayer, true);
                                            CreateGridPlayer.instance.listAllPlayer.Add(player);

                                            Destroy(target);
                                            CreateGridPlayer.instance.listAllPlayer.Remove(target);
                                            
                                            target = player;
                                            playerController = player.GetComponent<PlayerController>();

                                            playerController.EffectMerge.SetActive(true);
                                            StartCoroutine(waitHideEffectMerge(playerController));

                                            if (playerController.typePlayer == TYPE_PLAYER.ATK_PHEP && !CreateGridPlayer.instance.CheckExistUnlockedPlayerPhep(playerController.indexLevel))
                                            {
                                                CreateGridPlayer.instance.listUnlockedPlayerPhep.Add(playerController.indexLevel);
                                                string rs = string.Join(",", CreateGridPlayer.instance.listUnlockedPlayerPhep.ToArray());
                                                PlayerPrefs.SetString("ListUnlockedPlayerPhep", rs);
                                            }
                                        }
                                        else if (playerController.typePlayer == TYPE_PLAYER.ATK_FAR)
                                        {
                                            PlayerController tempController = playerController;
                                            GameObject player = Instantiate(CreateGridPlayer.instance.listPlayerFar[tempController.indexLevel + 1], tempController.transform.position, Quaternion.identity);
                                            
                                            player.GetComponent<PlayerController>().typePlayer = TYPE_PLAYER.ATK_FAR;
                                            player.GetComponent<PlayerController>().indexLevel = tempController.indexLevel + 1;
                                            player.GetComponent<PlayerController>().indexColumn = tempController.indexColumn;
                                            player.GetComponent<PlayerController>().indexRow = tempController.indexRow;
                                            player.GetComponent<PlayerController>().LoadPlayer();
                                            
                                            player.transform.SetParent(CreateGridPlayer.instance.ParentListPlayer, true);
                                            CreateGridPlayer.instance.listAllPlayer.Add(player);

                                            Destroy(target);
                                            CreateGridPlayer.instance.listAllPlayer.Remove(target);
                                            
                                            target = player;
                                            playerController = player.GetComponent<PlayerController>();

                                            playerController.EffectMerge.SetActive(true);
                                            StartCoroutine(waitHideEffectMerge(playerController));

                                            if (playerController.typePlayer == TYPE_PLAYER.ATK_FAR && !CreateGridPlayer.instance.CheckExistUnlockedPlayerFar(playerController.indexLevel))
                                            {
                                                CreateGridPlayer.instance.listUnlockedPlayerFar.Add(playerController.indexLevel);
                                                string rs = string.Join(",", CreateGridPlayer.instance.listUnlockedPlayerFar.ToArray());
                                                PlayerPrefs.SetString("ListUnlockedPlayerFar", rs);
                                            }
                                        }
                                        else
                                        {
                                            PlayerController tempController = playerController;
                                            GameObject player = Instantiate(CreateGridPlayer.instance.listPlayerNear[tempController.indexLevel + 1], tempController.transform.position, Quaternion.identity);
                                            
                                            player.GetComponent<PlayerController>().typePlayer = TYPE_PLAYER.ATK_NEAR;
                                            player.GetComponent<PlayerController>().indexLevel = tempController.indexLevel + 1;
                                            player.GetComponent<PlayerController>().indexColumn = tempController.indexColumn;
                                            player.GetComponent<PlayerController>().indexRow = tempController.indexRow;
                                            player.GetComponent<PlayerController>().LoadPlayer();
                                            
                                            player.transform.SetParent(CreateGridPlayer.instance.ParentListPlayer, true);
                                            CreateGridPlayer.instance.listAllPlayer.Add(player);

                                            Destroy(target);
                                            CreateGridPlayer.instance.listAllPlayer.Remove(target);
                                            
                                            target = player;
                                            playerController = player.GetComponent<PlayerController>();

                                            playerController.EffectMerge.SetActive(true);
                                            StartCoroutine(waitHideEffectMerge(playerController));

                                            if (playerController.typePlayer == TYPE_PLAYER.ATK_NEAR && !CreateGridPlayer.instance.CheckExistUnlockedPlayerNear(playerController.indexLevel))
                                            {
                                                CreateGridPlayer.instance.listUnlockedPlayerNear.Add(playerController.indexLevel);
                                                string rs = string.Join(",", CreateGridPlayer.instance.listUnlockedPlayerNear.ToArray());
                                                PlayerPrefs.SetString("ListUnlockedPlayerNear", rs);
                                            }
                                        }                                      
                                    }
                                    else
                                    { 
                                        target.transform.position = tempPosPlayer;
                                    }                               
                                }
                                else
                                {                                   
                                    target.transform.position = tempPosPlayer;
                                }
                            }
                            else
                            {                                
                                if (info != null)
                                {
                                    CreateGridPlayer.instance.listInfoPlayer.Remove(info);
                                    CreateGridPlayer.instance.listAllPlayer.Remove(target);

                                    playerController.indexColumn = playerController.CellSelectedObject.GetComponent<ItemGridControl>().indexColumn;
                                    playerController.indexRow = playerController.CellSelectedObject.GetComponent<ItemGridControl>().indexRow;
                                    info.indexColumn = playerController.indexColumn;
                                    info.indexRow = playerController.indexRow;
                                    CreateGridPlayer.instance.listInfoPlayer.Add(info);
                                    CreateGridPlayer.instance.listAllPlayer.Add(target);
                                }
                            }

                            if (!isMerged)
                            {
                                SoundManager.instance.MovePlayerAudioBtn();
                                playerController.EffectMove.SetActive(false);
                                playerController.EffectMove.SetActive(true);
                            }


                            if (playerController.CellSelectedObject != null)
                            {
                                playerController.CellSelectedObject.GetComponent<ItemGridControl>().UnSelectItem();
                            }
                                
                        }
                        else
                        {
                            target.transform.position = tempPosPlayer;
                        }
                    }
                    else
                    {
                        target.transform.position = tempPosPlayer;
                    }

                    playerController.isSelected = false;
                    CreateGridPlayer.instance.SaveInfoPlayer();
                }

                isMouseDragging = false;                
                if (PlayerPrefs.GetInt("Tutorial", 0) == 0 && isTutorialStep2)
                {
                    CreateGridPlayer.instance.Tutorial1.SetActive(false);
                    CreateGridPlayer.instance.Tutorial3.SetActive(true);
                }
            }

            if (isMouseDragging)
            {
                if (target != null && target.CompareTag("Player") && target.GetComponent<PlayerController>() != null)
                {
                    target.GetComponent<PlayerController>().isSelected = true;
                    target.GetComponent<PlayerController>().isMovedPlayer = true;
                    IndexCurrentGrid = target.GetComponent<PlayerController>().indexGridCurrent;

                    Vector3 distance_to_screen = Camera.main.WorldToScreenPoint(target.transform.position);
                    Vector3 pos_move = Camera.main.ScreenToWorldPoint(new Vector3(position.x, position.y, distance_to_screen.z));
                    toDrag = new Vector3(pos_move.x, target.transform.position.y, pos_move.z);

                    target.transform.localPosition = toDrag;
                }
            }
        }
    }

    IEnumerator waitHideEffectMerge(PlayerController playerController)
    {
        yield return new WaitForSeconds(1f);
        if (playerController != null)
            playerController.EffectMerge.SetActive(false);
    }

    IEnumerator waitHideEffectMove(PlayerController playerController)
    {
        yield return new WaitForSeconds(1f);
        if (playerController != null)
            playerController.EffectMove.SetActive(false);
    }
}
