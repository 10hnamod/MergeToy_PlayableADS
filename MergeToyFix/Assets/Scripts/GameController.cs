using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    // Start is called before the first frame update
    public static GameController instance;
    public GameObject[] level;
    private GameObject lv1;
    private void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
    }
    void Start()
    {
        lv1 = Instantiate(level[0], transform.position, Quaternion.identity);
    }

    public void EndCard()
    {
        Destroy(lv1);
        //lv1.SetActive(false);
        Instantiate(level[1], transform.position, Quaternion.identity);
    }

}
