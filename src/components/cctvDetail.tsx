import React from 'react';

import Image from 'next/image';

import SpecTable from './specTable';
import HNBS528R from '../../public/HNB-S528R.png';

function CctvDetail({model}: {model: string}) {
  const curData = cctvData.find(el => el.model == model)!;

  return (
    <div className="w-full p-5 mx-auto">
      <div className="mx-auto flex flex-col gap-20 items-center">
        <div className="text-center">
          <h3>{curData.title}</h3>
          <p className="mt-5">{curData.subtitle}</p>
        </div>
        <div className="flex gap-10 w-full">
          <div className="">
            <div>
              <Image className="w-[300px] border-2" src={HNBS528R} alt={curData.title} />
            </div>
            {/* <button className="mt-4 border-[1px] border-black p-2 rounded-lg">카달로그</button> */}
          </div>
          <div className="w-full p-2 flex flex-col gap-4">
            <p className="text-3xl">{curData.model}</p>
            <p className="text-xl text-gray-500">{curData.simpleInfo}</p>
            <p className="mt-4 text-2xl text-sky-500 font-semibold">제품 특징</p>
            <ul>
              {curData.point.map(el => {
                return (
                  <li key={el} className="text-xl text-gray-500">
                    · {el}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-3xl my-10">제품 사양</p>
      <div className="bg-slate-100 p-4">
        <SpecTable tableData={[{specs: curData.specs}]} />
        <div></div>
      </div>
    </div>
  );
}

export default CctvDetail;

const cctvData = [
  {
    title: '뷸렛 카메라',
    subtitle: '쉽게 설치가 가능하며 야간식별이 가능한 LED 일체형 초고화질 카메라',
    model: 'NTB-543X',
    simpleInfo: '5MP, H.265, 2.8~12mm, 광학 4.3배 AF 모터 줌, SONY QHD IP IR BULLET CAMERA',
    point: [
      '5MP QHD IP IR BULLET CAMERA',
      '야간 감시거리 : 40m (@0.0Lux)',
      '적외선 광원 : IR Assy 42EA',
      '렌즈사양 : 4.3배(2.8~12mm) AF 모터줌 렌즈',
      '입력 전원 : DC12V, PoE @MAX. 10W With IR On',
      '광학 4.3배 줌 / 디지털 32배 줌',
      '8 프라이버시 마스크',
      '양방향 오디오 통신',
    ],
    specs: {
      펌웨어: {
        '펌웨어 / 소프트웨어 파일명': 'nt28_fw_all.dat',
        '버전 정보': 'NT28_SWU1_V1.0.0.15',
        '펌웨어 소프트웨어 해시값': 'sha256 = 6bf59c2a2bc905cd2b7f5bfdac417e28526396dae288b5f43532c30b75e2924f',
      },
      카메라: {
        이미지센서: '1/2.8” 5MP SONY STARVIS CMOS Image Sensor',
        총화소수: '2,704(H) x 2,104(V) 5.69 Megapixel',
        유효화소수: '2,616(H) x 1,946(V) 5.14 Megapixel',
        최저조도: '0.0Lux (With IR On)',
        'Day & Night': 'Auto / Day / Night (ICR)',
        렌즈제어: 'Auto / Manual / One-Push',
        사용렌즈: 'F1.6~F2.9, f=2.8mm~12mm 4.3배 AF 모터 줌 렌즈',
        'S/N비': '50dB 이상',
      },
      '적외선 LED': {
        광원: 'IR Assy 42EA',
        발광대역: '850nm',
        'IR LED 가시거리': '40m',
      },
      비디오: {
        '비디오 압축': 'H.265, H.264, M-JPEG Triple Streaming',
        해상도:
          '2560×1920, 2560×1440, 2048×1536, 1600×1200, 1920×1080, 1280×1024, 1280×960, 640×480, 640×360, 320×240, 320×180',
        '프레임 속도': 'MAX. 30FPS @ All Resolutions',
        '비디오 스트리밍': 'Triple Stream (Stream 1, 2, 3) RTP/RTSP, Unicast RTP, Multicast RTP',
        '비디오 화질제어': 'H.265& H.264 : Bitrate Control / M-JPEG : Quality Level Control',
        '이미지 설정':
          'Day & Night, Focus, White Balance, WDR, DE-FOG, DNR, BRIGHTNESS, IMAGE Mirror, Motion Detection, Privacy Mask(8 Mask)',
        '비디오 출력': 'CVBS 1Vp-p(NTSC or PAL)',
      },
      오디오: {
        '오디오 스트리밍': '양방향 실시간 오디오',
        '오디오 압축포맷': 'G.711 u-law',
        '오디오 입/출력': 'Mono Jack, Line In / Out',
      },
    },
  },
  {
    title: '스피드돔 카메라',
    subtitle: '36배줌 PTZ 카메라에 차번 인식기능이 결합된 하이브리드 카메라',
    model: 'NTPTZ-436X',
    simpleInfo: '4MP , H.265 , 광학 36배 줌 , 1/1.8″ Ultra Low Light HD IP IR PTZ CAMERA',
    point: [
      '4MP, Ultra Low Light HD IP IR PTZ CAMERA',
      '1/1.8″ 6.48MP Sony STARVIS CMOS Sensor',
      '렌즈사양 : 광학 x36 (F1.5~F4.8, f=6mm~216mm)',
      '최저조도 : DDS On : 0.0375 Lux @ Color, 0.002 Lux@ B/W',
      'Day & Night / DE-FOG / 영상 흔들림 보정',
      '8 프라이버시 마스크 (구면좌표계)',
      '아날로그 CVBS 출력',
      'RS-485를 이용한 쉬운 PTZ제어',
      '2센서 입력 & 1알람 출력',
      'Intelligent IR LED Control (IR LED 거리 : 350m)',
      'MAX.30FPS @ All Resolutions',
      '양방향 오디오 통신',
      '입력전원 DC 12V, 3.5A',
    ],
    specs: {
      펌웨어: {
        '펌웨어 / 소프트웨어 파일명': 'AS3L_SWU1_V1.0.0.17',
        '버전 정보': 's3l_fw_all.dat',
        '펌웨어 소프트웨어 해시값': 'sha256 = e4e962ae2fa5f051717708e8eba59953ee6d5b845597d652ba1f8bdfc9d511f4',
      },
      카메라: {
        이미지센서: '1/2.8” 5MP SONY STARVIS CMOS Image Sensor',
        총화소수: '2,704(H) x 2,104(V) 5.69 Megapixel',
        유효화소수: '2,616(H) x 1,946(V) 5.14 Megapixel',
        최저조도: '0.0Lux (With IR On)',
        'Day & Night': 'Auto / Day / Night (ICR)',
        렌즈제어: 'Auto / Manual / One-Push',
        사용렌즈: 'F1.6~F2.9, f=2.8mm~12mm 4.3배 AF 모터 줌 렌즈',
        'S/N비': '50dB 이상',
      },
      '적외선 LED': {
        광원: 'IR Assy 42EA',
        발광대역: '850nm',
        'IR LED 가시거리': '40m',
      },
      비디오: {
        '비디오 압축': 'H.265, H.264, M-JPEG Triple Streaming',
        해상도:
          '2560×1920, 2560×1440, 2048×1536, 1600×1200, 1920×1080, 1280×1024, 1280×960, 640×480, 640×360, 320×240, 320×180',
        '프레임 속도': 'MAX. 30FPS @ All Resolutions',
        '비디오 스트리밍': 'Triple Stream (Stream 1, 2, 3) RTP/RTSP, Unicast RTP, Multicast RTP',
        '비디오 화질제어': 'H.265& H.264 : Bitrate Control / M-JPEG : Quality Level Control',
        '이미지 설정':
          'Day & Night, Focus, White Balance, WDR, DE-FOG, DNR, BRIGHTNESS, IMAGE Mirror, Motion Detection, Privacy Mask(8 Mask)',
        '비디오 출력': 'CVBS 1Vp-p(NTSC or PAL)',
      },
      오디오: {
        '오디오 스트리밍': '양방향 실시간 오디오',
        '오디오 압축포맷': 'G.711 u-law',
        '오디오 입/출력': 'Mono Jack, Line In / Out',
      },
    },
  },
  {
    title: '돔 카메라',
    subtitle: '36배줌 PTZ 카메라에 차번 인식기능이 결합된 하이브리드 카메라',
    model: 'NTD-543X ',
    simpleInfo: '4MP , H.265 , 광학 36배 줌 , 1/1.8″ Ultra Low Light HD IP IR PTZ CAMERA',
    point: [
      '4MP, Ultra Low Light HD IP IR PTZ CAMERA',
      '1/1.8″ 6.48MP Sony STARVIS CMOS Sensor',
      '렌즈사양 : 광학 x36 (F1.5~F4.8, f=6mm~216mm)',
      '최저조도 : DDS On : 0.0375 Lux @ Color, 0.002 Lux@ B/W',
      'Day & Night / DE-FOG / 영상 흔들림 보정',
      '8 프라이버시 마스크 (구면좌표계)',
      '아날로그 CVBS 출력',
      'RS-485를 이용한 쉬운 PTZ제어',
      '2센서 입력 & 1알람 출력',
      'Intelligent IR LED Control (IR LED 거리 : 350m)',
      'MAX.30FPS @ All Resolutions',
      '양방향 오디오 통신',
      '입력전원 DC 12V, 3.5A',
    ],
    specs: {
      펌웨어: {
        '펌웨어 / 소프트웨어 파일명': 'AS3L_SWU1_V1.0.0.17',
        '버전 정보': 's3l_fw_all.dat',
        '펌웨어 소프트웨어 해시값': 'sha256 = e4e962ae2fa5f051717708e8eba59953ee6d5b845597d652ba1f8bdfc9d511f4',
      },
      카메라: {
        이미지센서: '1/2.8” 5MP SONY STARVIS CMOS Image Sensor',
        총화소수: '2,704(H) x 2,104(V) 5.69 Megapixel',
        유효화소수: '2,616(H) x 1,946(V) 5.14 Megapixel',
        최저조도: '0.0Lux (With IR On)',
        'Day & Night': 'Auto / Day / Night (ICR)',
        렌즈제어: 'Auto / Manual / One-Push',
        사용렌즈: 'F1.6~F2.9, f=2.8mm~12mm 4.3배 AF 모터 줌 렌즈',
        'S/N비': '50dB 이상',
      },
      '적외선 LED': {
        광원: 'IR Assy 42EA',
        발광대역: '850nm',
        'IR LED 가시거리': '40m',
      },
      비디오: {
        '비디오 압축': 'H.265, H.264, M-JPEG Triple Streaming',
        해상도:
          '2560×1920, 2560×1440, 2048×1536, 1600×1200, 1920×1080, 1280×1024, 1280×960, 640×480, 640×360, 320×240, 320×180',
        '프레임 속도': 'MAX. 30FPS @ All Resolutions',
        '비디오 스트리밍': 'Triple Stream (Stream 1, 2, 3) RTP/RTSP, Unicast RTP, Multicast RTP',
        '비디오 화질제어': 'H.265& H.264 : Bitrate Control / M-JPEG : Quality Level Control',
        '이미지 설정':
          'Day & Night, Focus, White Balance, WDR, DE-FOG, DNR, BRIGHTNESS, IMAGE Mirror, Motion Detection, Privacy Mask(8 Mask)',
        '비디오 출력': 'CVBS 1Vp-p(NTSC or PAL)',
      },
      오디오: {
        '오디오 스트리밍': '양방향 실시간 오디오',
        '오디오 압축포맷': 'G.711 u-law',
        '오디오 입/출력': 'Mono Jack, Line In / Out',
      },
    },
  },
];
