using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ControlChuong : MonoBehaviour
{
    public Transform target;
    public GameObject RootPlayer;

    public bool isBoxCoin;
    public int indexLevel;

    private float speedBullet = 6f;

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
        else
        {
            Destroy(this.gameObject);
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
                playEffect(playerController);//ri2
                //long2
                GetComponent<Collider>().enabled = false;
                isTrigger = true;
                playerController.currentHp -= playerController.listDamageFar_PlayerByLevel[0]; //long9
                if (playerController.isEnemy || playerController.isBoxCoin)
                {                    
                    //playerController.GiftCoin_Txt.text = playerController.listCoinGift_PlayerByLevel[0] + "$";
                    //playerController.GiftCoin_Txt.gameObject.SetActive(true);
                    //playerController.GiftCoin_Txt.transform.eulerAngles = new Vector3(0, 0, 0);
                    //StartCoroutine(waitHideGiftCoin(playerController));                   
                    // Coin
                    //CreateGridPlayer.instance.coinGame += (long)playerController.listCoinGift_PlayerByLevel[0];
                    //CreateGridPlayer.instance.CoinGetInLevel += (long)playerController.listCoinGift_PlayerByLevel[0];
                    //CreateGridPlayer.instance.Coin_Txt.text =
                    //    CreateGridPlayer.instance.FormatNumber(CreateGridPlayer.instance.coinGame);
                    //PlayerPrefs.SetString("mCoin", CreateGridPlayer.instance.coinGame.ToString());
                } 
                else
                    Destroy(this.gameObject);//ri2
            }
            Destroy(this.gameObject);
        }
    }

    public void playEffect (PlayerController playerController)
    {
        playerController.hitChuong();
    }
    //IEnumerator waitHideGiftCoin(PlayerController playerController)
    //{
    //    yield return new WaitForSeconds(0.3f);
    //    if (playerController != null && playerController.GiftCoin_Txt != null)
    //        playerController.GiftCoin_Txt.gameObject.SetActive(false);
    //}
}
