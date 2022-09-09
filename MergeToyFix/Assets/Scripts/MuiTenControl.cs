using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MuiTenControl : MonoBehaviour
{
    public Transform target;
    public GameObject RootPlayer;

    public bool isBoxCoin;
    public int indexLevel;
    public TrailRenderer trail;
    public Color[] listColorTrail;

    public float speedBullet = 6f;

    void Start()
    {
        trail.startColor = listColorTrail[indexLevel];
    }

    void Update()
    {
        if (target != null)
        {
            if (isBoxCoin)
                transform.LookAt(new Vector3(target.position.x, target.position.y, target.position.z));
            else
                transform.LookAt(new Vector3(target.position.x, target.position.y + 0.7f, target.position.z));
            transform.Translate(Vector3.forward * speedBullet * Time.deltaTime, Space.Self);
        }
    }

    private bool isTrigger;
    void OnTriggerStay(Collider other)
    {
        if ((other.gameObject.tag == "Player" || other.gameObject.tag == "Enemy") && other.gameObject.tag != RootPlayer.gameObject.tag)
        {
            PlayerController playerController = other.gameObject.GetComponent<PlayerController>();
            if (playerController != null && !playerController.isDie && !isTrigger)
            {
                GetComponent<Collider>().enabled = false;
                isTrigger = true;
                playerController.currentHp -= playerController.listDamageFar_PlayerByLevel[RootPlayer.GetComponent<PlayerController>().indexLevel]; //long9
                if (playerController.isEnemy || playerController.isBoxCoin)
                {
                    //playerController.GiftCoin_Txt.text = playerController.listCoinGift_PlayerByLevel[playerController.indexLevel] + "$";
                    //playerController.GiftCoin_Txt.gameObject.SetActive(true);
                    //playerController.GiftCoin_Txt.transform.eulerAngles = new Vector3(0, 0, 0);
                    //StartCoroutine(waitHideGiftCoin(playerController));
                    // Coin
                    //CreateGridPlayer.instance.coinGame += (long)playerController.listCoinGift_PlayerByLevel[playerController.indexLevel];
                    //CreateGridPlayer.instance.CoinGetInLevel += (long)playerController.listCoinGift_PlayerByLevel[playerController.indexLevel];
                    //CreateGridPlayer.instance.Coin_Txt.text =
                    //    CreateGridPlayer.instance.FormatNumber(CreateGridPlayer.instance.coinGame);
                    //PlayerPrefs.SetString("mCoin", CreateGridPlayer.instance.coinGame.ToString());
                }
                if (playerController.isBoxCoin)
                    Destroy(gameObject, 0.4f);
                else
                    Destroy(gameObject, 0.2f);
            }

            Destroy(this.gameObject);//ri2
        }
    }

    //IEnumerator waitHideGiftCoin(PlayerController playerController)
    //{
    //    yield return new WaitForSeconds(0.3f);
    //    if (playerController != null && playerController.GiftCoin_Txt != null)
    //        playerController.GiftCoin_Txt.gameObject.SetActive(false);
    //}
}
