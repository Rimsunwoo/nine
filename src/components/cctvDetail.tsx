import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import SpecTable from './specTable';
import 돔카메라 from '../../public/돔카메라.png';
import 불렛카메라 from '../../public/불렛카메라.png';
import 스피드돔카메라 from '../../public/스피드돔.png';

function CctvDetail({model}: {model: string}) {
  const curData = model === 'NTB-543X' ? model1 : model === 'NTD-543X' ? model2 : model3;

  return (
    <div className="px-20">
      <div className="flex flex-col gap-10 items-center px-20">
        <div className="text-center w-full pb-4 border-b-[2px]">
          <h3>{curData.title}</h3>
          <p className="text-lg mt-4">{curData.subtitle}</p>
          <Link href={'/products/cctv'} className="rounded-md p-2 bg-[#CA5C75] text-white flex justify-start w-fit">
            ← 목록
          </Link>
        </div>
        <div className="flex gap-20 my-10">
          <div className="p-2">
            <div className="w-[300px] h-[300px] relative">
              <Image className="border-2" src={curData.image} alt={curData.title} fill />
            </div>
            {/* <button className="mt-4 border-[1px] border-black p-2 rounded-lg">카달로그</button> */}
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="text-3xl">모델명 : {curData.model}</p>
            <p className="text-lg text-gray-500">{curData.simpleInfo}</p>
            <p className="mt-4 text-2xl text-sky-500 font-semibold">제품 특징</p>
            <ul>
              {curData.point.map(el => {
                return (
                  <li key={el} className="text-lg text-gray-500">
                    - {el}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="border-[1px] w-full" />
        <p className="text-3xl my-10">제품 사양</p>
        <div className="bg-slate-100 p-4">
          <SpecTable tableData={[{specs: curData.specs}]} />
        </div>
      </div>
    </div>
  );
}

export default CctvDetail;

const model1 = {
  title: '불렛 카메라',
  subtitle: '쉽게 설치가 가능하며 야간식별이 가능한 LED 일체형 초고화질 카메라',
  model: 'NTB-543X',
  simpleInfo: '5MP, H.265, 2.8~12mm, 광학 4.3배 AF 모터 줌, SONY QHD IP IR BULLET CAMERA',
  image: 불렛카메라,
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
      'IR LED 가시거리': '40',
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
};

const model2 = {
  title: '돔 카메라',
  subtitle: '360˚ 영상 펼침모드로 공간의 전체를 감시하는 네트워크 카메라',
  model: 'NTD-543X',
  simpleInfo: '5MP, 2.8~12mm AF 모터줌, 1/2.8″ Sony Starvis 네트워크 적외선 돔 카메라',
  image: 돔카메라,
  point: [
    'Sony Starvis 1/2.8″ 5.69메가픽셀 CMOS 센서',
    '2.8~12mm 모터라이즈줌 렌즈',
    '5fps ~ 30fps @ All Resolution',
    '야간감시거리 20m',
    'Onvif 지원',
    'PoE지원',
    'DC12V, 750mA(Max)',
    'Options : 메탈 방수 돔',
  ],
  specs: {
    펌웨어: {
      '펌웨어 / 소프트웨어 파일명': 'nt28_fw_all.dat',
      '버전 정보': 'NT28_SWU1_V1.0.0.15',
      '펌웨어 소프트웨어 해시값': 'sha256 = 6bf59c2a2bc905cd2b7f5bfdac417e28526396dae288b5f43532c30b75e2924f',
    },
    이미지센서: {
      '촬상 소자': 'Sony 1/2.8″ 5.69Megapixel Image Sensor',
      총화소수: '2704(H) x 2104(V) 5.69 Megapixel',
      유효화소수: '2616(H) x 1946(V) 5.14 MegaPixel',
      주사방식: '프로그래시브 스캔',
      '신호대 잡음비': '50dB(AGC OFF) 이상',
      '전자셔터 속도': 'Automatic : Min. 1/30,000 sec~ Max. 1/30 sec, Suppress Rolling, Manual',
      최저조도: '0.005Lux / 0Lux (IR On)',
      야간감시거리: '20M',
      렌즈: '2.8~12mm Motorized LENS / 109.4° (wide)~ 37.8° (tele)',
    },
    카메라: {
      WDR: 'DWDR (1~3Step)',
      'Day & Night': 'Auto / Day(Color) / Night(BW), ICR Control',
      '3D DNR': '1~100',
      'DE-FOG, HLC, LDC': 'YES',
      화이트밸런스: 'Auto / Indoor / Outdoor / Fluorescent',
      사생활보호기능: '구역 On/Off, 최대 8 개존 설정가능',
      모션감지기능: '432 Zone (On/Off, 1~5Step)',
    },
    인터페이스: {
      이더넷: '10/100 Base-T (RJ-45)',
      CVBS: '1Vp-p',
    },
    네트워크: {
      '비디오 압축': 'H.265 / H.264 / MJPEG',
      '비디오 해상도':
        '2560×1920 / 2560×1440 /2048×1536/1600×1200 /1920×1080/1280×1024/1280×960/640×480/640×36/320×240/320×180',
      '비디오 프레임': '5fps ~ 30fps @ All Resolution',
      '비디오 품질': 'H.265/H.264 : Bitrate Control, MJPEG : Quality Level Control',
      '비디오 스트리밍': 'Tripe Stream (Stream 1,2,3), RTP/RTSP, UnicastRTP, Multicast RTP',
      프로토콜: 'TCP/IP ,UDP ,IPv4/v6, HTTP, HTTPS, FTP, UPnP , RTP, RTSP, RTCP, DHCP, ARP,Zeroconf',
      '오디오 압축': 'G.711 u-law',
      '오디오 스트리밍': 'Two way',
      '동시접속자 수': '최대 10사용자',
    },
    '이벤트 알림': {
      센서: '1(Digital Input)',
      알림: '1(Digital Output, Open Collector)',
    },

    '동작 환경': {
      '동작 습도': '0%~80%',
      '동작 온도': '-10ºC~+60ºC',
      '입력 전원': 'DC12V, PoE',
      '소비 전력': 'DC12V Current Max 750mA',
      무게: '350g',
      크기: '130Φ(W) X 106mm(H)',
    },
  },
};

const model3 = {
  title: '스피드 돔 카메라',
  subtitle: '36배줌 PTZ 카메라에 차번 인식기능이 결합된 하이브리드 카메라',
  model: 'NTPTZ-436X',
  simpleInfo: '4MP , H.265 , 광학 36배 줌 , 1/1.8″ Ultra Low Light HD IP IR PTZ CAMERA',
  image: 스피드돔카메라,
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
      '펌웨어 / 소프트웨어 파일명': 's3l_fw_all.dat',
      '버전 정보': 'AS3L_SWU1_V1.0.0.17',
      '펌웨어 소프트웨어 해시값': 'sha256 = e4e962ae2fa5f051717708e8eba59953ee6d5b845597d652ba1f8bdfc9d511f4',
    },
    이미지픽업: {
      '촬상 소자': '1/1.8‘’ 6MP Sony STARVIS CMOS Sensor',
      화소수: '6.48M Pixels / 3,096(H) x 2,094(V)',
      '신호대 잡음비': '50dB 이상',
      '최저 조도': 'DSS On : 0.0375 Lux @ Color, 0.002 Lux @ B/W',
      'Day & Night': 'Auto / Day / Night (ICR)',
      사용렌즈: '6~216mm 36배 AF 전동줌 (H:49.27°(Wide)~1.85°(Tele), V:28.93°(Wide)~1.04°(Tele)',
    },
    '적외선 LED': {
      발광대역: '850nm',
      'IR 가시거리': '350m',
      제어: '자동(줌 배율 연동) / 수동(OFF~127)',
      '조도 센서': 'CDS 센서',
    },
    비디오: {
      '비디오 코덱': 'H.265, H.264, M-JPEG 트리플 스트리밍',
      해상도: 'MAX. 2560×1440',
      '비디오 화질제어': 'H.265 & H.264 : Bitrate Control / M-JPEG : Quality Level Control',
      '비디오 프레임 레이트': 'MAX/ 30FPS @ All Resolutions',
      '비디오 스트리밍': 'Triple Stream (Stream 1, 2, 3) RTP/RTSP, Unicast RTP, Multicast RTP',
      '이미지 설정':
        'Day & Night, 포커스, AE Mode, 화이트밸런스, BLC, WDR, DE-FOG, 조리개 조절, 노이즈 제거, 영상 흔들림 보정, 프라이버시 기능',
      '비디오 출력': 'CVBS 1Vp-p(NTSC or PAL)',
    },
    PTZ: {
      '팬/틸트 범위': '팬 : 360˚ (무한회전) / 틸트 : -10˚ ~ 90˚',
      '팬/틸트 속도': '프리셋 : 240˚/초, 수동 : 0.1˚ ~ 240˚/초(줌 배율과 연동), 스윙 : 1˚ ~ 90˚/초',
      프리셋: '255 프리셋',
      패턴: '4 패턴 [패턴당 768 명령(약 5분 분량)]',
      '오토 팬': '1 오토 팬',
      그룹: '8 그룹 (프리셋을 조합한 최대 16개 동장 편집 가능)',
      '특수 기능': 'Auto Flip, Auto Parking, Power-up Action 등',
    },
    오디오: {
      '오디오 스트리밍': '양방향 실시간 오디오',
      '오디오 코덱': 'G.711 u-law',
      '오디오 입/출력': '모노 잭, Line In / Out',
    },
    '시리얼 및 네트워크': {
      통신: 'RS-485',
      '통신 프로토콜': 'Pelco-D',
      '네트워크 인터페이스': '이더넷 10/100 Base-T (RJ-45)',
      '지원 프로토콜': 'TCP/IP, UDP/IP, RTP, RTSP, RTCP, NTP, HTTP, DHCP, FTP, SMTP, DNS, DDNS, ONVIF 지원',
    },
    '시스템 통합': {
      '시스템 OS': '임베디드 리눅스',
      OSD: '영어',
      '센서 입력': '2입력, 포토커플러 방식',
      '알람 출력': '출력 1개, 릴레이 출력 방식, 최대부하 DC 24V, 1.0A 또는 AC 125V, 0.5A',
      '메모리 슬롯': 'Micro SD',
    },
    '전원/외관/환경': {
      '전원/전류': 'DC 12V,3.5A',
      무게: '7kg / 15.5 lb / 브라켓 제외',
      '외형치수(mm)': '266(Φ)x362.8(H) [mm] / 8.9(Φ)x14.3(H) [mm] / 브라켓 제외',
      동작온도: '-30℃ ~ 60℃',
    },
  },
};
