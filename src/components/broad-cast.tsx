import Image from 'next/image';

import DownLoadBtn from './common/downLoadBtn';

export default function BroadCastPage() {
  const catalog = [
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMjM5/MDAxNzAzNjU1NzU5NzA1.60Bt5V0G6yhQyH3d4BR4HtgMHWZ0qZ0nsoSotKYpOn8g.J6WPmK4YJkxUbWp6tVHc-VXSzfsLZk4Jkq7Hyv6c5XQg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0002.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMTU3/MDAxNzAzNjU1NzY3MDMx.RpazmMix7gTNPDFS6KoJPewzlBym5P3Y45J_9U9QxdEg.RITmF9FMsxaS6TfdIBcg2WinCBZo9QiIeyak91iDzcAg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0003.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfOTIg/MDAxNzAzNjU1NzcxOTA2.bPCA0zZ6n1AIUwKpOGQ7KeY94aGY_YJ1TDYvQpczcOwg.0RCLsNAZj90ZD-QD7i7iMpJLj2qvyfoEXNBQePJ_a40g.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0004.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMSAg/MDAxNzAzNjU1Nzc2MzAx.JlVhiD5zAQk5V5a0NqMRGkEahFnkipocLPsEfZKeY6gg.C-Bb62dbbOcJXLz0Kv1GAt03OJOMLZGeUGwPMFe3NeEg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0005.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMjAx/MDAxNzAzNjU1NzgyMTAx.UYpy7c9_CKEcuUp7ajXVsKIAjgCPEHKxQvF_8wF5X3Mg.lwqPo_aOR3RU_rQTviRLb8U76mAXZqIKf8zXvXAujqIg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0006.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMjc1/MDAxNzAzNjU1Nzg3ODY0.QQOcrh6M2hNtzlmBZTNR_x3AlZN9ONcix4LZYHUr1oQg.obCwQAh0rRuNydG2l9i7rYD7cFkNQg65-SA0iXv1UREg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0007.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMTUg/MDAxNzAzNjU1NzkzMTQ1.bbqrC1lWmA1yOXmTXgxJFB96Iwkm0Wvk1zlaqme8R34g.DMKS9te8jgNbbFDgjRTxtXzmMMw47u0t9C0lG6H_yVAg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0008.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfNjIg/MDAxNzAzNjU1Nzk2NjI0.kMNREL6Nm0duUa6ugUynBdTR342KEock5iii7nI2Mywg.VpmrPw4U1Vh6H4sCno0ZrmrHy_WLBs_FZmytsE4GzX0g.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0009.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMTEg/MDAxNzAzNjU1ODAyMDQ1.75f5y0tkEZj-Vs2ZcnGuGD00kXJaaAH5HZVqW3a-DI0g.jjzgLsmQfQ_tT8mhwsBSTDHR913A_YQl1x5KfAWEObwg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0010.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfNDQg/MDAxNzAzNjU1ODA4MDEx.l2-BSJXoo5-SEbXiH768VpZQwlonQR7QKxe7AEqYhkkg.0eEMLYAyEtlwLGJm8GLPk5Xm2SdAu98joGcKlxwkOKcg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0011.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfNyAg/MDAxNzAzNjU1ODEyMTUw.Frbkdcryk48jT__-Hrt_kc4gHF__Db1wMhwOmZ15L3gg.HcxC7xzhRHMYeSIrTWzRHkDzb5ANLkOd3TgqnKTXymwg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0012.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfODMg/MDAxNzAzNjU1ODE2ODkx.mktOmtioKt5EU3gU7Bd4HI6vxkHeu0AX7hakeiAV7LAg.njBoamMAA22qPD27E9VHMKFaQ6i36_4fdRkqVDDkMIYg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0013.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfNzAg/MDAxNzAzNjU1ODIwNDY3.uquy1VEENij5RqTydf0-33nF-U4BDnrU8LGL9fg1LwQg.1Fb_Q-SoSDskCxAoy0bzrFbcRUPzGk1FgJc01PqyBbAg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0014.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMTc0/MDAxNzAzNjU1ODIzMzQ4.WH96zu9pmrlWy8H-6iaC3V29wYzJgQ-O3Tu-Bl7-3RUg.JVHNsgbLZzQ44i4nm0KK5roTShgs7UmP_RG1LLBDwKUg.JPEG.dlatjsdn205/%EC%A3%BC)%EB%82%98%EC%9D%B8_%EB%B0%A9%EC%86%A1%EC%B9%B4%EB%8B%AC%EB%A1%9C%EA%B7%B8_%EC%B5%9C%EC%A2%85_page-0015.jpg?type=w966',
  ];
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <h3>Broad Cast</h3>
      <DownLoadBtn>
        <a href="/나인-브로드캐스트카달로그.pdf" download>
          카달로그 다운로드
        </a>
      </DownLoadBtn>
      {catalog.map(url => {
        return <Image key={url} src={url} alt="catalog" width={0} height={0} sizes="100%" style={{width: '100%'}} />;
      })}
    </div>
  );
}
