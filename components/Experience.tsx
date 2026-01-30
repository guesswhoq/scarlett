
import React from 'react';
import Section from './Section';

const experienceData = [
{
    role: '비즈니스 영어 강사',
    company: '글로벌어학원',
    period: '2024.10 - 2025.05',
    description: '미국유학+아나운서 경험을 살려 쉽고 재미있는 영어 스피킹 수업 진행했습니다. 비즈니스에 필요한 토익스피킹이나 토익 수업도 담당했습니다. 이후 학원 운영진으로부터 수강생들의 증원은 물론 자격증 취득과 영어실력 실력향상을 제보받았습습니다. .'
},
{
    role: '경북 지역상생 B2G 리포터',
    company: '와이낫',
    period: '2024.03 - 2024.06',
    description: '50회 이상의 촬영본 제작. 포항시의 각종 로컬 상권을 탐방하고 상권의 주요 특징을 소개 및  지역 주민을 인터뷰하는 리포터. 방송 이후 인터뷰한 상권의 가게들로부터 활발한 판매 성과를 제보받았습니다.경상북도 포항시와 인근 지역의 로컬 상권 홍보 영상 모델로도 활동했습니다.'
},
{
    role: 'B2G 교육사업 PM',
    company: '패스트캠퍼스',
    period: '2023.03 - 2024.02',
    description: 'B2G 교육 사업 기획 & 운영 매니저로서 하나의 B2G 사업을 총괄하여 담당했습니다. 기획 후 사업 예산,협업, 갖가지 문제들을 해결하며 운영하였고, 결과적으로 사업 재수주와 높은 KPI를 이끌어냈습니다.',
},
{
    role: '패션 & 뷰티 라이브커머스 쇼호스트 ',
    company: '프리랜서 (Grip 외 다수 브랜드)',
    period: '2022.03 - 2023.01',
    description: '다수의 패션제품과 뷰티 제품라인 라이브커머스 방송 경험이 있습니다. 상품의 특성과 세일링 포인트를 포착하여 부드러운 스피치로 녹여내  고객들에게 어필하였습니다. 대부분의 방송 실시간과 이후에 뛰어난 판매 성과를 기록했습니다.',
  },
{
    role: '패션 브랜드 모델 ',
    company: '프리랜서 (Grip 외 다수 브랜드)',
    period: '2022.02 - 2023.01',
    description: '다수의 쇼핑몰 메인모델로 활동(시즌별 룩북 및 상세페이지 담당)했습니다. 쇼핑몰 메인모델 활동 외에도 게스홀딩스코리아와 같은 디자인실 QC모델로도 활동했습니다. 감각적인 포즈연출과 촬영 아이디어제안으로 뛰어난 판매 성과를 기록했습니다.',
},
{
    role: '뷰티 & 라이프스타일 브랜드 모델 ',
    company: '프리랜서 (스팟 스튜디오 외 다수 브랜드)',
    period: '2022.05 - 2023.01',
    description: ' 다수의 제품군의 광고 및 상세페이지 모델(카카오 선물하기 상세페이지 등)로 활동했습니다. 상품의 특성과 세일링 포인트를 포착하여 강조하는 포즈와 연출로  뛰어난 판매 성과를 기록했습니다.',
}, 
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="relative border-l-2 border-[#b8954b] pl-10">
        {experienceData.map((exp, index) => (
          <div key={index} className="mb-12">
            <div className="absolute -left-3.5 mt-1.5 w-6 h-6 bg-[#b8954b] rounded-full border-4 border-[#f4f1eb]"></div>
            <div className="text-left bg-[#E5E4E2] p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">{exp.period}</p>
              <h3 className="text-2xl font-bold text-[#b8954b] mt-1">{exp.role}</h3>
              <p className="text-lg font-semibold text-[#8c7851] mb-2">{exp.company}</p>
              <p className="text-[#8c7851] leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
