using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerController : MonoBehaviour
{
    public bool isEnemy;
    public bool isBoss;
    public bool isBoxCoin;
    public bool isDie;
    public TYPE_PLAYER typePlayer;
    public int indexLevel;

    public int indexColumn;
    public int indexRow;

    public GameObject EffectMerge;
    public GameObject EffectMove;

    public Animator animator;

    public GameObject currentWeapon;
    public float[] listScalePlayerByLevel;

    public float[] listHP_PlayerNearByLevel;
    public float[] listHP_PlayerFarByLevel;

    public float[] listDamageNear_PlayerByLevel;
    public float[] listDamageFar_PlayerByLevel;

    //public float[] listCoinGift_PlayerByLevel;

    public GameObject HP_Player;
    public GameObject HP_Enemy;
    public float MaxHP = 1f;
    public float currentHp;

    public bool isMovedPlayer = true;
    public bool isSelected;
    public int indexGridCurrent;
    public GameObject CellSelectedObject;

    public bool isTriggerGrid;

    public GameObject MuiTen;

    //public Text GiftCoin_Txt;

    public GameObject[] listColliderAttackBoss;

    //public GameObject[] listEffect; //ri2
    //public GameObject hitChuongEffect; //ri2
    //public GameObject hitMagicEffect; //ri2
    //public GameObject hitDamageEffect;

    private Collider Collider_RightHand;

    void Start()
    {
        if (typePlayer == TYPE_PLAYER.ATK_NEAR)
        {
            Collider[] listCol = GetComponentsInChildren<Collider>();
            for (int i = 0; i < listCol.Length; i++)
            {
                if (listCol[i].gameObject.name.ToLower().Contains("righthand"))
                {
                    Collider_RightHand = listCol[i];
                    Collider_RightHand.enabled = false;
                    break;
                }
            }
        }

        //for (int i = 0; i < listHP_PlayerNearByLevel.Length; i++)
        //{
        //    if (i > 0)
        //    {               
        //        listDamageNear_PlayerByLevel[i] = listDamageNear_PlayerByLevel[i - 1] * 2.75f; //- listDamageNear_PlayerByLevel[i - 1] * 0.65f;

        //        if (typePlayer == TYPE_PLAYER.ATK_FAR)
        //            listDamageFar_PlayerByLevel[i] = listDamageFar_PlayerByLevel[i - 1] * (i * 2) * 90 / 100; //- listDamageFar_PlayerByLevel[i - 1] * 0.65f;
        //        else
        //            listDamageFar_PlayerByLevel[i] = listDamageFar_PlayerByLevel[i - 1] * (i * 2) * 100 / 100; // Damage Phép

        //        listHP_PlayerFarByLevel[i] = listDamageFar_PlayerByLevel[i] * 16.5f * i * 4;
        //    }
        //    else
        //        listHP_PlayerFarByLevel[i] = listDamageFar_PlayerByLevel[i] * 16.5f;

        //    listHP_PlayerNearByLevel[i] = listHP_PlayerFarByLevel[i] * 3f;
        //    //listCoinGift_PlayerByLevel[i] = listCoinGift_PlayerByLevel[i] * 2;
        //}
    }

    public void LoadPlayer()
    {
        indexGridCurrent = indexRow * 5 + indexColumn;
        if (!isEnemy)
        {
            HP_Player.SetActive(true);
            HP_Enemy.SetActive(false);
            HP_Player.transform.GetChild(0).GetComponent<Image>().fillAmount = 1f;
        }
        else
        {
            HP_Player.SetActive(false);
            HP_Enemy.SetActive(true);
            HP_Enemy.transform.GetChild(0).GetComponent<Image>().fillAmount = 1f;
        }

        if (isBoxCoin)
        {
            HP_Player.SetActive(false);
            HP_Enemy.SetActive(true);
            HP_Enemy.transform.GetChild(0).GetComponent<Image>().fillAmount = 1f;
        }

        if (typePlayer == TYPE_PLAYER.ATK_NEAR)
        {
            MaxHP = listHP_PlayerNearByLevel[0];
            currentHp = MaxHP;
            if (!isBoss && !isBoxCoin)
            {
                if (isEnemy)
                    currentWeapon.tag = "Enemy";
                else
                    currentWeapon.tag = "Player";
            }
            else if (isBoss)
            {
                for (int i = 0; i < listColliderAttackBoss.Length; i++)
                    listColliderAttackBoss[i].SetActive(true);
            }
        }
        else if (typePlayer == TYPE_PLAYER.ATK_FAR)
        {
            MaxHP = listHP_PlayerFarByLevel[0];
            currentHp = MaxHP;           
        }
        else if (typePlayer == TYPE_PLAYER.ATK_PHEP)
        {
            MaxHP = listHP_PlayerFarByLevel[0];
            currentHp = MaxHP;
        }

        if (!isBoss)
            transform.localScale = new Vector3(listScalePlayerByLevel[0], listScalePlayerByLevel[0], listScalePlayerByLevel[0]);
    }

    public Transform nearPlayer;

    private float timerArcher;
    private float MaxTimerArcher = 1.5f;
    private bool isAttackArcherFirst = true;

    //public GameObject DongBangPlayer;

    void Update()
    {
        if (CreateGridPlayer.instance.isStartFight)
        {
            if (typePlayer == TYPE_PLAYER.ATK_NEAR && Collider_RightHand != null)
            {
                Collider_RightHand.enabled = true;
            }

            if (isDie) return;
            if (currentHp <= 0)
            {
                isDie = true;
                StartCoroutine(waitdestroyBoxCollider());              
                //for (int i = 0; i < listEffect.Length; i++)
                //{
                //    listEffect[i].SetActive(false);
                //}
                if (isEnemy || isBoxCoin)
                {
                    HP_Enemy.SetActive(false);
                    CreateGridPlayer.instance.listAllEnemy.Remove(gameObject);

                    if (isBoxCoin)
                        Destroy(gameObject);
                }
                else
                {
                    HP_Player.SetActive(false);
                    CreateGridPlayer.instance.listAllPlayer.Remove(gameObject);
                }

                //GiftCoin_Txt.gameObject.SetActive(false);

                if (animator != null)
                    animator.SetTrigger("TriggerDie");
                if (typePlayer == TYPE_PLAYER.ATK_NEAR)
                    SoundManager.instance.StopRunnerAudioBtn();
                if (!isEnemy)
                    SoundManager.instance.DieAudioBtn();

                return;
            }                       

            if (isEnemy || isBoxCoin)
            {
                HP_Enemy.transform.GetChild(0).GetComponent<Image>().fillAmount = currentHp / MaxHP;
                nearPlayer = GetClosestEnemy(CreateGridPlayer.instance.listAllPlayer.ToArray());
            }
            else
            {
                HP_Player.transform.GetChild(0).GetComponent<Image>().fillAmount = currentHp / MaxHP;
                nearPlayer = GetClosestEnemy(CreateGridPlayer.instance.listAllEnemy.ToArray());
            }

            if (typePlayer == TYPE_PLAYER.ATK_FAR && nearPlayer != null)
            {
               
                if (isAttackArcherFirst)
                {
                    animator.SetBool("isArcher", true);
                    if (!isEnemy)
                        SoundManager.instance.FarAttackAudioBtn();
                        ArcherShooter();
                        Debug.Log("first shoot");
                    isAttackArcherFirst = false;
                }
                else
                {
                    timerArcher += Time.deltaTime;
                    if (timerArcher >= MaxTimerArcher)
                    {
                        animator.SetBool("isArcher", true);
                        if (!isEnemy)
                         SoundManager.instance.FarAttackAudioBtn();
                        ArcherShooter();
                        Debug.Log("shoot");
                        timerArcher = 0;
                    }
                    else
                    {
                        animator.SetBool("isArcher", false);
                    }
                }

                //Vector3 toTarget = nearPlayer.transform.position - transform.position;
                transform.LookAt(nearPlayer.transform.position);
                if (isEnemy)
                    HP_Enemy.transform.eulerAngles = new Vector3(0, 0, 0);
                else
                    HP_Player.transform.eulerAngles = new Vector3(0, 0, 0);
            }

            if (typePlayer == TYPE_PLAYER.ATK_PHEP && nearPlayer != null)
            {
                if (isAttackArcherFirst)
                {
                    animator.SetBool("isPhepATK", true);
                    if (!isEnemy)
                        SoundManager.instance.FarAttackAudioBtn();
                    isAttackArcherFirst = false;
                }
                else
                {
                    timerArcher += Time.deltaTime;
                    if (timerArcher >= MaxTimerArcher)
                    {
                        animator.SetBool("isPhepATK", true);
                        if (!isEnemy)
                            SoundManager.instance.FarAttackAudioBtn();
                        timerArcher = 0;
                    }
                    else
                    {
                        animator.SetBool("isPhepATK", false);
                    }
                }

                //Vector3 toTarget = nearPlayer.transform.position - transform.position;
                transform.LookAt(nearPlayer.transform.position);
                if (isEnemy)
                    HP_Enemy.transform.eulerAngles = new Vector3(0, 0, 0);
                else
                    HP_Player.transform.eulerAngles = new Vector3(0, 0, 0);
            }

            if (typePlayer == TYPE_PLAYER.ATK_NEAR && nearPlayer != null && !isBoxCoin)
            {
                float offsetSpace = 0.9f;
                if (isBoss)
                    offsetSpace = 1.2f;

                if (Vector3.Distance(transform.position, nearPlayer.position) > offsetSpace)
                {
                    if (!isEnemy)
                    {
                        if (currentHp > 0)
                        {
                                SoundManager.instance.RunnerAudioBtn();
                        }
                        else
                        {
                                SoundManager.instance.StopRunnerAudioBtn();
                        }
                    }

                    animator.SetBool("isRun", true);
                    animator.SetBool("isAttack", false);

                    transform.LookAt(nearPlayer.transform.position);
                    Vector3 toTarget = nearPlayer.transform.position - transform.position;
                    transform.Translate(0.6f * Time.deltaTime * toTarget, Space.World); //ri2
                }
                else
                {
                    if (!isEnemy)
                    {
                        SoundManager.instance.StopRunnerAudioBtn();
                        SoundManager.instance.NearAttackAudioBtn();
                    }

                    animator.SetBool("isRun", false);
                    animator.SetBool("isAttack", true);
                }

                if (isEnemy)
                    HP_Enemy.transform.eulerAngles = new Vector3(0, 0, 0);
                else
                    HP_Player.transform.eulerAngles = new Vector3(0, 0, 0);
            }
        }
    }

    Transform GetClosestEnemy(GameObject[] enemies)
    {
        Transform tMin = null;
        float minDist = Mathf.Infinity;
        Vector3 currentPos = transform.position;
        foreach (GameObject t in enemies)
        {
            if (t != null && !t.GetComponent<PlayerController>().isDie)
            {
                float dist = Vector3.Distance(t.transform.position, currentPos);
                if (dist < minDist)
                {
                    tMin = t.transform;
                    minDist = dist;
                }
            }
        }
        return tMin;
    }

    private void OnTriggerStay(Collider other)
    {
        if (isTriggerGrid)
        {
            return;
        }
        GetComponent<Rigidbody>().WakeUp();

        if (other.CompareTag("Grid")) 
        {
            //if (PlayerPrefs.GetInt("Tutorial", 0) == 0 )
            //{
            //    if (!DragPlayer.instance.isTutorialStep1)
            //    {
            //        return;
            //    }
            //}

            if (isSelected && isMovedPlayer)
            {
                other.gameObject.GetComponent<ItemGridControl>().SelectedItem();
                indexGridCurrent = other.gameObject.GetComponent<ItemGridControl>().Index;
                CellSelectedObject = other.gameObject;
                isTriggerGrid = true;
                return;
            }
            else if (isCollisionPlayer)
            {                
            }
            else
            {
                isMovedPlayer = false;
                other.gameObject.GetComponent<ItemGridControl>().UnSelectItem();
            }

            CellSelectedObject = null; //long8
            //isMovedPlayer = true;
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        GetComponent<Rigidbody>().WakeUp();
       
        if (CreateGridPlayer.instance.isStartFight && !isDie &&
         !other.gameObject.CompareTag(gameObject.tag)   &&
         (nearPlayer != null && other.gameObject == nearPlayer.gameObject)) //long9
        {
            hitDamage(); //ri2
            if (isEnemy)
            {
                if (other.gameObject.CompareTag("Player"))
                {
                    PlayerController playerController = other.gameObject.GetComponent<PlayerController>();
                    if (playerController != null && !playerController.isDie)
                    {
                        playerController.currentHp -= listDamageNear_PlayerByLevel[0];
                        //GiftCoin_Txt.text = playerController.listCoinGift_PlayerByLevel[0] + "$";
                        //GiftCoin_Txt.gameObject.SetActive(true);
                        //GiftCoin_Txt.transform.eulerAngles = new Vector3(0, 0, 0);
                        //StartCoroutine(waitHideGiftCoin());
                    }
                }
            }
            else
            {
                if ((other.gameObject.CompareTag("Enemy") && other.gameObject.name.Contains("Enemy")) ||
                    (other.gameObject.CompareTag("Enemy") && other.gameObject.name.Contains("BoxFarm")))
                {
                    PlayerController playerController = other.gameObject.GetComponent<PlayerController>();
                    if (playerController != null && !playerController.isDie)
                    {
                        playerController.currentHp -= listDamageNear_PlayerByLevel[0];

                        //GiftCoin_Txt.text = playerController.listCoinGift_PlayerByLevel[0] + "$";
                        //if (!isBoxCoin)
                        //    GiftCoin_Txt.gameObject.SetActive(false);
                        //else
                        //    GiftCoin_Txt.gameObject.SetActive(true);
                        //GiftCoin_Txt.transform.eulerAngles = new Vector3(0, 0, 0); 
                        //StartCoroutine(waitHideGiftCoin());

                        // Coin
                        //CreateGridPlayer.instance.coinGame += (long)playerController.listCoinGift_PlayerByLevel[0];
                        //CreateGridPlayer.instance.CoinGetInLevel += (long)playerController.listCoinGift_PlayerByLevel[0];
                        //CreateGridPlayer.instance.Coin_Txt.text =
                        //    CreateGridPlayer.instance.FormatNumber(CreateGridPlayer.instance.coinGame);
                        //PlayerPrefs.SetString("mCoin", CreateGridPlayer.instance.coinGame.ToString());
                    }
                }
            }
        }
    }



    private void OnTriggerExit(Collider other)
    {
        GetComponent<Rigidbody>().WakeUp();
        if (other.gameObject.CompareTag("Grid"))
        {
            CellSelectedObject = null;
            other.gameObject.GetComponent<ItemGridControl>().UnSelectItem();
            other.gameObject.GetComponent<ItemGridControl>().listPlayerGrid.Remove(gameObject);
            DragPlayer.instance.playerDel = null;
            isTriggerGrid = false;
        }
    }

    public bool isCollisionPlayer;
    private void OnCollisionStay(Collision other)
    {
        GetComponent<Rigidbody>().WakeUp();
        if (other.gameObject.CompareTag("Player") && other.gameObject.GetComponent<PlayerController>() != null)
        {
            if (other.gameObject.GetComponent<PlayerController>() != null &&
                other.gameObject.GetComponent<PlayerController>().typePlayer == typePlayer &&
                other.gameObject.GetComponent<PlayerController>().indexLevel == indexLevel)
            {
                isCollisionPlayer = true;                
            }
            else
            {
                isCollisionPlayer = false;
                isMovedPlayer = false;
            }
        }
        else if (!isTriggerGrid)
        {
            isMovedPlayer = false;
        }
    }

    private void OnCollisionExit(Collision other)
    {
        GetComponent<Rigidbody>().WakeUp();
        if (other.gameObject.CompareTag("Player") && other.gameObject.GetComponent<PlayerController>() != null)
        {
            isCollisionPlayer = false;
            DragPlayer.instance.playerDel = null;
        }
    }

    public void ArcherShooter()
    {
        if (nearPlayer != null)
        {
            GameObject bullet;
           /* transform.position = transform.position + new Vector3(Time.deltaTime, verticalInput * movementSpeed * Time.deltaTime, 0*/
            bullet = Instantiate(MuiTen, currentWeapon.transform.position, currentWeapon.transform.rotation);
            ControlChuong bulletGun = bullet.GetComponent<ControlChuong>(); //ri
            bulletGun.isBoxCoin = isBoxCoin;
            bulletGun.target = nearPlayer;
            bulletGun.RootPlayer = gameObject;
            bulletGun.indexLevel = indexLevel;
        }
    }

    /*public void MagicShooter()
    {
        if (nearPlayer != null)
        {
            GameObject bullet;
            bullet = Instantiate(MuiTen, currentWeapon.transform.position, currentWeapon.transform.rotation);
            ControlMagic bulletGun = bullet.GetComponent<ControlMagic>(); //ri
            bulletGun.isBoxCoin = isBoxCoin;
            bulletGun.target = nearPlayer;
            bulletGun.RootPlayer = gameObject;
            bulletGun.indexLevel = indexLevel;
        }
    }*/

    public void hitChuong()
    {
        //hitChuongEffect.SetActive(true);
        //StartCoroutine(waithidehitChuong());
    }

    //IEnumerator waithidehitChuong()
    //{
    //    yield return new WaitForSeconds(1f);
    //    hitChuongEffect.SetActive(false);
    //}

    //public void hitMagic()
    //{
    //    hitMagicEffect.SetActive(true);
    //    StartCoroutine(waithidehitMagic());
    //}

    //IEnumerator waithidehitMagic()
    //{
    //    yield return new WaitForSeconds(1.5f);
    //    hitMagicEffect.SetActive(false);
    //}
    public void hitDamage()
    {
        //hitDamageEffect.SetActive(true);
        //StartCoroutine(waithidehitDamage());
    }

    //IEnumerator waithidehitDamage()
    //{
    //    yield return new WaitForSeconds(1f);
    //    hitDamageEffect.SetActive(false);
    //}
    IEnumerator waitdestroyBoxCollider()
    {
        yield return new WaitForSeconds(1f);
        Destroy(GetComponent<BoxCollider>());
    }

    private bool isArcherAtk;
    public void ArcherIdle()
    {
        isArcherAtk = false;
        animator.SetBool("isArcher", isArcherAtk);
    }
}

public enum TYPE_PLAYER
{
    ATK_NEAR,
    ATK_FAR,
    ATK_PHEP
}
