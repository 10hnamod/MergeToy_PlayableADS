using System.Collections.Generic;
using UnityEngine;

public class ItemGridControl : MonoBehaviour
{
    public int Index;
    public int indexColumn;
    public int indexRow;

    public bool isContainerPlayer;
    public GameObject GroundMaterial;
    public Material[] listGroundMaterial;

    public LayerMask layerMask;
    public GameObject playerObjectToMerge;

    public void HideAllLineItem()
    {
    }

    public void UnSelectItem()
    {       
        GroundMaterial.GetComponent<MeshRenderer>().material = listGroundMaterial[0];
    }

    public void SelectedItem()
    {        
        GroundMaterial.GetComponent<MeshRenderer>().material = listGroundMaterial[1];
    }

    public List<GameObject> listPlayerGrid = new List<GameObject>();

    private void OnTriggerExit(Collider other)
    {
        if (CreateGridPlayer.instance.isStartFight) 
            return;
        if (other.gameObject.CompareTag("Player") && other.gameObject.GetComponent<PlayerController>() != null)
        {
            if (playerObjectToMerge && other.gameObject != playerObjectToMerge)
            {
                // Move dragged object from currently occupied cell
                DragPlayer.instance.playerDel = playerObjectToMerge;
                Debug.Log("Di chuyển đến ô đang bị chiếm");
            }
            else
            {
                // Move self from the current cell
                playerObjectToMerge = null;
                Debug.Log("Di chuyển object từ 1");
            }
        }
    }

    private void OnTriggerStay(Collider other)
    {
        if (CreateGridPlayer.instance.isStartFight) return;
        if (other.gameObject.CompareTag("Player") && other.gameObject.GetComponent<PlayerController>() != null)
        {
            if (!playerObjectToMerge)
            {
                // Assign dragged object to the empty cell
                playerObjectToMerge = other.gameObject;
            }
            else
            {
                if (other.gameObject != playerObjectToMerge)
                {
                    // Prepare for merging
                    DragPlayer.instance.playerDel = playerObjectToMerge;
                }
            }
        }
    }
}
