using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FixedUI : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] private RectTransform tuto, fight;
    private int[] current_size = {0,0};
    public int level;
    void Start()
    {
        current_size[0] = Screen.height;
        current_size[1] = Screen.width;
        UpdateUI();
    }

    private void UpdateUI()
    {

        if (Screen.height > Screen.width)
        {
            Debug.Log("Portrait");
            if (level == 1)
            {
                tuto.localScale = new Vector3(1, 1, 1);
            }
            else
            {
                tuto.localScale = new Vector3(1.3f, 1.3f, 1.3f);
                tuto.anchoredPosition = new Vector3(120, -74, 0);
            }
            fight.anchoredPosition = new Vector3(0, 520, 0);
        }
        else
        {
            Debug.Log("Landscape");
            tuto.localScale = new Vector3(0.7f, 0.7f, 0.7f);
            if (level == 2)
            {
                tuto.anchoredPosition = new Vector3(52, -35, 0);
            }
            fight.anchoredPosition = new Vector3(0, 85, 0);
        }
    }

    // Update is called once per frame
    void Update()
    {
        if (Screen.height != current_size[0] || Screen.width != current_size[1])
        {
            current_size[0] = Screen.height;
            current_size[1] = Screen.width;
            UpdateUI();
        }
    }
}
