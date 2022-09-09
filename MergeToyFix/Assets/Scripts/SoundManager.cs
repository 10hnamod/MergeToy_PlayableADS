using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
    public AudioSource Click_Audio;
    public AudioSource Win_Audio;
    public AudioSource Lose_Audio;
    public AudioSource MergePlayer_Audio;

    public AudioSource Runner_Audio;
    public AudioSource Die_Audio;
    public AudioSource NearAttack_Audio;
    public AudioSource FarAttack_Audio;

    public AudioSource GunShoot_Audio;

    public AudioSource BuyPlayer_Audio;
    public AudioSource MovePlayer_Audio;

    public static SoundManager instance;

    void Start()
    {
        if (instance == null)
            instance = this;
        else
            return;

        DontDestroyOnLoad(gameObject);
    }

    public void ClickAudioBtn()
    {
        Click_Audio.Play();
    }

    public void BuyPlayerAudioBtn()
    {
        BuyPlayer_Audio.Play();
    }

    public void MovePlayerAudioBtn()
    {
        MovePlayer_Audio.Play();
    }

    public void RunnerAudioBtn()
    {
        if (!Runner_Audio.isPlaying)
        {
            Runner_Audio.Play();
        }
    }

    public void GunShootAudioBtn()
    {
        GunShoot_Audio.Play();
    }

    public void StopRunnerAudioBtn()
    {
        if (Runner_Audio.isPlaying)
        {
            Runner_Audio.Stop();
        }
    }

    public void DieAudioBtn()
    {
        if (!Die_Audio.isPlaying)
        {
            Die_Audio.Play();
        }
    }

    public void NearAttackAudioBtn()
    {
        if (!NearAttack_Audio.isPlaying)
        {
            NearAttack_Audio.Play();
        }
    }

    public void FarAttackAudioBtn()
    {
        if (!FarAttack_Audio.isPlaying)
        {
            FarAttack_Audio.Play();
        }
    }

    public void MergePlayerAudioBtn()
    {
        if (!MergePlayer_Audio.isPlaying)
        {
            MergePlayer_Audio.Play();
        }
    }

    public void WinGameSound()
    {
        if (!Win_Audio.isPlaying)
        {
            Win_Audio.Play();
        }
    }

    public void LoseGameSound()
    {
        if (!Lose_Audio.isPlaying)
        {
            Lose_Audio.Play();
        }
    }
}
