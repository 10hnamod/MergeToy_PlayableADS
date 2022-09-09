using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class CreateGridPlayer : MonoBehaviour
{
    public GameObject ObjectGroundGrid;
    public GameObject[,] GameGrid;
    public List<EntityPosPlayer> listPosContainerPlayer = new List<EntityPosPlayer>();
    public List<EntityInfoPlayer> listInfoPlayer = new List<EntityInfoPlayer>();
    public List<int> listUnlockedPlayerNear = new List<int>();
    public List<int> listUnlockedPlayerFar = new List<int>();
    public List<int> listUnlockedPlayerPhep = new List<int>();

    public GameObject[] listPosShowEnemy;

    public Transform ParentListPlayer;

    public GameObject[] listPlayerNear;
    public GameObject[] listPlayerFar;
    public GameObject[] listPlayerPhep;

    private int numberRow = 3;
    private int numberColumn = 5;

    public static CreateGridPlayer instance;

    public bool isStartFight;
    public GameObject[] listObjectButton;
    public List<GameObject> listAllPlayer = new List<GameObject>();
    public List<GameObject> listAllEnemy = new List<GameObject>();

    public GameObject Confetti_WinGame;
    public bool isWinGame;
    public bool isLoseGame;

    //public long coinGame;
    //public long CoinGetInLevel;
    //public Text Coin_Txt;

    public Text[] listCoinBuyPlayer;
    public GameObject MainPanel;

    public Text Level_Txt;
    //private List<string> listMapLv = new List<string>();

    public GameObject listBoss;
    //public TYPEGAMEPLAY currentTYPEGAMEPLAY;    

    //public Image[] listItemLvImg;
    public Color[] listColor;

    //public Sprite[] listImageMap;
    //public Image CurrentMapImg;
    //public Image NextMapImg;
    //public GameObject[] listMap3DMoiTruong;   

    //Tutorial
    public GameObject Tutorial1, Tutorial3;
    public GameObject PanelLinkGame;

    void Start()
    {
        PlayerPrefs.DeleteAll();
        if (PlayerPrefs.GetInt("FirstGame", 0) == 0)
        {
            //ri2            PlayerPrefs.SetString("ListContainerPlayer", "1,0,far,0_2,0,near,0");
            PlayerPrefs.SetString("ListContainerPlayer", "1,2,near,3_3,2,near,3_1,0,near,5_3,0,far,5");
            PlayerPrefs.SetString("ListUnlockedPlayerNear", "0");
            PlayerPrefs.SetString("ListUnlockedPlayerFar", "0");
            PlayerPrefs.SetString("mCoin", "10000000");

            PlayerPrefs.SetInt("CurrentCoinBuyNear", 50);
            PlayerPrefs.SetInt("CurrentCoinBuyFar", 50);
            PlayerPrefs.SetInt("CurrentCoinBuyPhep", 50);
            PlayerPrefs.SetInt("FirstGame", 1);
        }
        
        instance = this;

        // Coin
        //coinGame = long.Parse(PlayerPrefs.GetString("mCoin", "0"));
        //Coin_Txt.text = FormatNumber(coinGame);

        if (PlayerPrefs.GetInt("Tutorial", 0) == 1)
        {
            PlayerPrefs.SetString("ListContainerPlayer", "0,0,near,0_0,1,near,0_0,2,near,0_1,0,near,0_1,2,near,0_" +
                "2,0,near,0_2,1,near,0_2,2,near,0_3,0,near,0_3,2,near,0_4,0,near,0_4,1,near,0_4,2,near,0");

            Level_Txt.text = "LEVEL 2";
            Tutorial1.SetActive(false);
            CreateBossByIndex(2);
            PanelLinkGame.SetActive(true);
        }
        else
        {
            Level_Txt.text = "LEVEL 1";
            CreateBossByIndex(2);
        }

        //listCoinBuyPlayer[0].text = FormatNumber(PlayerPrefs.GetInt("CurrentCoinBuyNear", 50));
        //listCoinBuyPlayer[1].text = FormatNumber(PlayerPrefs.GetInt("CurrentCoinBuyFar", 50));

        listPosContainerPlayer.Add(new EntityPosPlayer(2, 0));
        listPosContainerPlayer.Add(new EntityPosPlayer(1, 0));
        listPosContainerPlayer.Add(new EntityPosPlayer(3, 0));
        listPosContainerPlayer.Add(new EntityPosPlayer(0, 0));
        listPosContainerPlayer.Add(new EntityPosPlayer(4, 0));

        listPosContainerPlayer.Add(new EntityPosPlayer(2, 1));
        listPosContainerPlayer.Add(new EntityPosPlayer(1, 1));
        listPosContainerPlayer.Add(new EntityPosPlayer(3, 1));
        listPosContainerPlayer.Add(new EntityPosPlayer(0, 1));
        listPosContainerPlayer.Add(new EntityPosPlayer(4, 1));

        listPosContainerPlayer.Add(new EntityPosPlayer(2, 2));
        listPosContainerPlayer.Add(new EntityPosPlayer(1, 2));
        listPosContainerPlayer.Add(new EntityPosPlayer(3, 2));
        listPosContainerPlayer.Add(new EntityPosPlayer(0, 2));
        listPosContainerPlayer.Add(new EntityPosPlayer(4, 2));

        string mCheckPlayer = PlayerPrefs.GetString("ListContainerPlayer", "");
        if (!mCheckPlayer.Equals(""))
        {
            string[] listPosPlayer = mCheckPlayer.Split('_');
            for (int i = 0; i < listPosPlayer.Length; i++)
            {
                string[] listColumnRow = listPosPlayer[i].Split(',');
                listInfoPlayer.Add(new EntityInfoPlayer
                    (
                    int.Parse(listColumnRow[0]),
                    int.Parse(listColumnRow[1]),
                    (listColumnRow[2] == "far" ? TYPE_PLAYER.ATK_FAR : (listColumnRow[2] == "phep" ? TYPE_PLAYER.ATK_PHEP : TYPE_PLAYER.ATK_NEAR)),
                    int.Parse(listColumnRow[3]
                    )));
            }
        }

        CreateGrid();

        //LoadItemLevelImg(PlayerPrefs.GetInt("level", 0));
        //listMap3DMoiTruong[0].SetActive(true);
        //for (int i = 0; i < listMap3DMoiTruong.Length; i++)
        //{
        //    if (i == indexImgMap)
        //        listMap3DMoiTruong[i].SetActive(true);
        //    else
        //        listMap3DMoiTruong[i].SetActive(false);
        //}
        //CurrentMapImg.sprite = listImageMap[indexImgMap];
        //if (indexImgMap >= 4)
        //    NextMapImg.sprite = listImageMap[0];
        //else
        //    NextMapImg.sprite = listImageMap[indexImgMap + 1];
    }

    
    
    //private void LoadItemLevelImg(int currentLv)
    //{
    //    int number = currentLv % 10;
    //    for (int i = 0; i < listItemLvImg.Length; i++)
    //    {
    //        if (i > number)
    //        {
    //            listItemLvImg[i].color = listColor[2];
    //        }
    //        else if (i == number)
    //        {
    //            listItemLvImg[i].color = listColor[1];
    //        }
    //        else
    //        {
    //            listItemLvImg[i].color = listColor[0];
    //        }
    //    }
    //}
    private void CreateBossByIndex(int indexLevel)
    {
        GameObject boss = Instantiate(listBoss, new Vector3(0, 0.82f, 2.62f), Quaternion.Euler(0, 180, 0));
        boss.name = "Boss";
        boss.tag = "Enemy";
        boss.GetComponent<PlayerController>().isEnemy = true;
        boss.GetComponent<PlayerController>().typePlayer = TYPE_PLAYER.ATK_NEAR;
        boss.GetComponent<PlayerController>().indexLevel = indexLevel;
        boss.GetComponent<PlayerController>().indexColumn = -1;
        boss.GetComponent<PlayerController>().indexRow = -1;
        boss.GetComponent<PlayerController>().LoadPlayer();
        boss.transform.SetParent(ParentListPlayer, true);
        listAllEnemy.Add(boss);
    }

    public string FormatNumber(long num)
    {
        // Ensure number has max 3 significant digits (no rounding up can happen)
        long i = (long)Math.Pow(10, (int)Math.Max(0, Math.Log10(num) - 2));
        num = num / i * i;

        if (num >= 1000000000)
            return (num / 1000000000D).ToString("0.##") + "B";
        if (num >= 1000000)
            return (num / 1000000D).ToString("0.##") + "M";
        if (num >= 1000)
            return (num / 1000D).ToString("0.##") + "K";

        return num.ToString("#,0");
    }

    void Update()
    {
        if (isLoseGame || isWinGame) return;

        if (listAllPlayer.Count <= 0)
        {
            isLoseGame = true;
            for (int i = 0; i < listAllEnemy.Count; i++)
            {
                listAllEnemy[i].GetComponent<PlayerController>().animator.SetTrigger("TriggerWin");
            }           

            StartCoroutine(waitShowWinGame());
        }
        else if (listAllEnemy.Count <= 0)
        {
            isWinGame = true;
            for (int i = 0; i < listAllPlayer.Count; i++)
            {
                listAllPlayer[i].GetComponent<PlayerController>().animator.SetTrigger("TriggerWin");
            }
           
            if (!Confetti_WinGame.activeSelf)
                Confetti_WinGame.SetActive(true);
            StartCoroutine(waitShowWinGame());
        }
    }

    IEnumerator waitShowWinGame()
    {
        if (isWinGame)
        {
                SoundManager.instance.WinGameSound();
        }
        else
        {
                SoundManager.instance.LoseGameSound();
        }


        if (isWinGame)
        {
            yield return new WaitForSeconds(4f);
            //SceneManager.LoadScene(SceneManager.GetActiveScene().name);
            GameController.instance.EndCard();
            //WinGamePanel.SetActive(true);
        }

        else
        {
            yield return new WaitForSeconds(3.5f);
            //SceneManager.LoadScene(SceneManager.GetActiveScene().name);
            GameController.instance.EndCard();
            //LoseGamePanel.SetActive(true);
        }

    }

    public bool CheckExistUnlockedPlayerNear(int index)
    {
        for (int i = 0; i < listUnlockedPlayerNear.Count; i++)
        {
            if (index == listUnlockedPlayerNear[i])
                return true;
        }
        return false;
    }

    public bool CheckExistUnlockedPlayerFar(int index)
    {
        for (int i = 0; i < listUnlockedPlayerFar.Count; i++)
        {
            if (index == listUnlockedPlayerFar[i])
                return true;
        }
        return false;
    }

    public bool CheckExistUnlockedPlayerPhep(int index)
    {
        for (int i = 0; i < listUnlockedPlayerPhep.Count; i++)
        {
            if (index == listUnlockedPlayerPhep[i])
                return true;
        }
        return false;
    }

    private void CreateGrid()
    {
        GameGrid = new GameObject[numberColumn, numberRow];
        float sizeRow = 1f / 5;
        float sizeCol = 1f / 3;
        for (int i = 0; i < numberColumn; i++)
        {
            for (int j = 0; j < numberRow; j++)
            {
                GameGrid[i, j] = Instantiate(ObjectGroundGrid);
                GameGrid[i, j].transform.position = new Vector3(i * sizeRow, 0, j * sizeCol);
                GameGrid[i, j].transform.SetParent(transform, false);
                GameGrid[i, j].gameObject.name = "Ground (" + i + "," + j + ")";                

                EntityInfoPlayer info = GetInfoPlayerFromList(i, j);
                if (info != null)
                {
                    GameObject player;
                    if (info.typePlayer == TYPE_PLAYER.ATK_PHEP)
                    {
                        player = Instantiate(listPlayerPhep[info.indexLevel],
                        new Vector3(
                            GameGrid[i, j].transform.position.x,
                            0.77f,
                            GameGrid[i, j].transform.position.z
                        ),
                        Quaternion.identity);
                    }
                    else if (info.typePlayer == TYPE_PLAYER.ATK_FAR)
                    {
                        player = Instantiate(listPlayerFar[info.indexLevel],
                        new Vector3(
                            GameGrid[i, j].transform.position.x,
                            0.77f,
                            GameGrid[i, j].transform.position.z
                        ),
                        Quaternion.identity);
                    }
                    else
                    {
                        player = Instantiate(listPlayerNear[info.indexLevel],
                        new Vector3(
                            GameGrid[i, j].transform.position.x,
                            0.77f,
                            GameGrid[i, j].transform.position.z
                        ),
                        Quaternion.identity);
                    }

                    player.GetComponent<PlayerController>().typePlayer = info.typePlayer;
                    player.GetComponent<PlayerController>().indexLevel = info.indexLevel;
                    player.GetComponent<PlayerController>().indexColumn = i;
                    player.GetComponent<PlayerController>().indexRow = j;
                    player.GetComponent<PlayerController>().LoadPlayer();
                    player.transform.SetParent(ParentListPlayer, true);

                    listAllPlayer.Add(player);
                }

                int index = 0;
                if (j == 0)
                    index = i;
                else if (j == 1)
                    index = 5 + i;
                else if (j == 2)
                    index = 10 + i;
                GameGrid[i, j].GetComponent<ItemGridControl>().Index = index;
                GameGrid[i, j].GetComponent<ItemGridControl>().indexColumn = i;
                GameGrid[i, j].GetComponent<ItemGridControl>().indexRow = j;
            }
        }
    }

    public EntityInfoPlayer GetInfoPlayerFromList(int column, int row)
    {
        for (int i = 0; i < listInfoPlayer.Count; i++)
        {
            if (listInfoPlayer[i].indexColumn == column && listInfoPlayer[i].indexRow == row)
            {
                return listInfoPlayer[i];
            }
        }

        return null;
    }

    public void SaveInfoPlayer()
    {
        string chuoi = "";
		for (int i = 0; i < listInfoPlayer.Count; i++)
		{
			EntityInfoPlayer info = listInfoPlayer[i];
			if (i != listInfoPlayer.Count - 1)
			{
				chuoi += info.indexColumn + "," + info.indexRow + "," +
					(info.typePlayer == TYPE_PLAYER.ATK_FAR ? "far," : (info.typePlayer == TYPE_PLAYER.ATK_PHEP ? "phep," : "near,")) +
					info.indexLevel + "_";
			}
			else
			{
				chuoi += info.indexColumn + "," + info.indexRow + "," +
					(info.typePlayer == TYPE_PLAYER.ATK_FAR ? "far," : (info.typePlayer == TYPE_PLAYER.ATK_PHEP ? "phep," : "near,")) +
					info.indexLevel;
			}

		}
		PlayerPrefs.SetString("ListContainerPlayer", chuoi);
    }

    public void PressFight()
    {
            SoundManager.instance.ClickAudioBtn();

        if (PlayerPrefs.GetInt("Tutorial", 0) == 0)
        {
            PlayerPrefs.SetInt("Tutorial", 1);
        }
        Tutorial1.SetActive(false);
        isStartFight = true;        
        for (int i = 0; i < listObjectButton.Length; i++)
        {
            listObjectButton[i].SetActive(false);
        }
        for (int i = 0; i < numberColumn; i++)
        {
            for (int j = 0; j < numberRow; j++)
            {
                GameObject cell = GameGrid[i, j];
                cell.GetComponent<ItemGridControl>().HideAllLineItem();
            }
        }
    }
}
[System.Serializable]
public class EntityInfoPlayer
{
    public int indexColumn;
    public int indexRow;
    public TYPE_PLAYER typePlayer;
    public int indexLevel;

    public EntityInfoPlayer(int indexColumn, int indexRow, TYPE_PLAYER typePlayer, int indexLevel)
    {
        this.indexColumn = indexColumn;
        this.indexRow = indexRow;
        this.typePlayer = typePlayer;
        this.indexLevel = indexLevel;
    }
}

[System.Serializable]
public class EntityPosPlayer
{
    public int indexColumn;
    public int indexRow;

    public EntityPosPlayer(int indexColumn, int indexRow)
    {
        this.indexColumn = indexColumn;
        this.indexRow = indexRow;
    }
}

//public enum TYPEGAMEPLAY
//{
//    NORMAL,
//    //PVP
//}
