
import React from 'react';
import Section from './Section';

const projectsData = [
  {
    Title: "파리 패션 매거진 기획/발간",
    Description: "프랑스 파리 공동 협업 패션 매거진 프로젝트에서 크리에이티브 디렉션을 담당하여 총 5개 작품의 기획 의도, 콘셉트, 아이템 구성 및 모델 선정 기획 및 발표했습니다.",
    ImagePath: 'images/Paris_Fashion_Magazine.png',
    Tags: ['#매거진', '#에디터', '#패션'],
    URL: 'https://iridescent-way-9a2.notion.site/2f75dcf5c6c1802ea0cddafa905a4976', 
  },
  {
    Title: "경북 B2G 지역상생 리포터",
    Description: "포항시 지역상생 프로젝트 리포터로 활동하며 주요 로컬 상권을 현장 취재하고, 주민·상인 인터뷰를 통해 상권의 특징과 현장 목소리를 전달하는 동시에 프로젝트 홍보 영상에 출연해 모델로 참여했습니다.",
    ImagePath: 'images/B2G_Reporter.jpeg', 
    Tags: ['#지역상생', '#로컬상권', '#현장취재'],
    URL: 'https://iridescent-way-9a2.notion.site/B2G-1085dcf5c6c180bb9a50c75cae32dd69', 
  },
{
    Title: "(주)데이원컴퍼니 이어드림 3기 PM",
    Description: "패스트캠퍼스 X 중소벤처기업진흥공단 「2023 스타트업 청년인재 이어드림 스쿨 3기」에서 B2G 교육 사업 기획·운영 매니저로서 메인 기획부터 예산 관리, 유관기관 협업, 면접·교육 운영·취업 연계까지 약 18억 원 규모의 사업 전 과정을 총괄했습니다.",
    ImagePath: 'images/Day1Company.png', 
    Tags: ['#B2G사업', '#기획', '#프로젝트총괄'],
    URL: 'https://iridescent-way-9a2.notion.site/3-PM-e27697b64a3848629c649e0b990d00e5', 
  },
{
    Title: "'Grip' 패션 쇼호스트",
    Description: "라이브 커머스 플랫폼 Grip 1위 채널 '쭈언니' 패션 쇼호스트로 활동하며 카메라 전·후면을 활용한 디테일한 제품 설명과 안정적인 소통으로 시간당 평균 300만 원 이상의 매출을 창출했습니다.",
    ImagePath: 'images/grip.jpg', 
    Tags: ['#라이브커머스', '#패션쇼호스트', '#콘텐츠세일즈'],
    URL: 'https://iridescent-way-9a2.notion.site/Grip-dce6f25588e54298b198e75cf297f80f', 
  },
{
    Title: "'셀렉무드' 패션 브랜드 모델",
    Description: "페미닌 패션 브랜드 '셀렉무드' 모델로 참여해 2030 타깃에 맞는 자연스러운 연출과 현대무용·발레에서 착안한 섬세한 제스처, 몽환적인 표정 연출을 통해 브랜드 무드를 효과적으로 구현하며 촬영 기획에도 함께했습니다.",
    ImagePath: 'images/Select_Mood.jpg', 
    Tags: ['#패션모델', '#브랜드무드', '#페미닌컨셉'],
    URL: 'https://iridescent-way-9a2.notion.site/970e0cc0cf1b4cff93c0b1e4507a6ad7', 
  },
{
    Title: "'지니아니' 젠더리스 패션브랜드 모델",
    Description: "젠더리스 패션 브랜드 '지니아니' 모델로 참여해 굵은 실루엣과 어깨 라인이 강조되는 포즈, 중성적인 표정과 각도 연출로 브랜드 무드를 구현했으며, 브랜드 인사이트를 바탕으로 촬영 기획과 연출 방향 논의에도 함께했습니다.",
    ImagePath: 'images/Genieani.jpg', 
    Tags: ['#젠더리스패션', '#패션모델', '#브랜드모델'],
    URL: 'https://iridescent-way-9a2.notion.site/c1f749dda0814688a4e27bded872c8a8', 
  },
{
    Title: "캐쥬얼 여성복 브랜드 '워너비' 모델",
    Description: "10–20대 타깃 브랜드 모델로 참여해 영하고 경쾌한 무드를 표현했으며, 연예인 레퍼런스를 기반으로 콘셉트에 맞는 촬영 기획부터 스튜디오 선정, MD 협업을 통한 제품 셀렉과 촬영·보정 과정까지 함께했습니다.",
    ImagePath: 'images/Wannabe.jpeg', 
    Tags: ['#패션모델', '#촬영기획', '#포즈연출'],
    URL: 'https://iridescent-way-9a2.notion.site/cb46e7e6fd2546f594f261ea9fd8d437', 
  },
{
    Title: "뷰티브랜드 'Q1' 뷰티모델",
    Description: "기초 화장품 중심의 뷰티 촬영에서 깨끗하고 자연스러운 피부 표현과 청순한 무드를 구현했으며, 제품 성분과 특징을 사전 숙지해 핵심 포인트가 드러나는 표정·포즈 연출을 수행했습니다.",
    ImagePath: 'images/Q1.jpg', 
    Tags: ['#뷰티모델', '기초화장품모델', '#모델'],
    URL: 'https://iridescent-way-9a2.notion.site/Q1-c417400b6ab34ce1b12cb6f9a24e8ac2', 
  },
  {
    Title: "'카카오메이커스' 제품 모델",
    Description: "제품 특성이 효과적으로 드러나도록 섬세한 손 포즈와 사용 맥락별 연출을 적용해 촬영을 진행했으며, 제품 기능을 사전 숙지해 디테일까지 반영하고 상품연출 촬영기획에도 아이디어를 내며 적극적으로 참여했습니다.",
    ImagePath: 'images/Kakao.jpeg', 
    Tags: ['#제품모델', '#제품촬영', '#라이프스타일'],
    URL: 'https://iridescent-way-9a2.notion.site/184bd217a5ed48c2b9637faefa8545bd', 
  },
  {
    Title: "골프웨어 및 스포츠웨어 브랜드 모델",
    Description: "스포티하면서도 성숙한 무드의 포즈 연출을 통해 전 세대 여성을 아우르는 당당하고 자신감 있는 브랜드 이미지를 구현했으며, 촬영 전 의류의 소재와 기능성을 분석해 연출 방향을 기획하고 스포츠웨어 브랜드 대표들과 협업해 촬영 콘셉트 기획 전반에 참여했습니다.",
    ImagePath: 'images/golf.jpg', 
    Tags: ['#골프웨어', '#패션모델', '#스포츠모델'],
    URL: 'https://iridescent-way-9a2.notion.site/4f8925e5b1d148bd93f4391eef208457', 
  },
 {
    Title: "촬영 에이전시 ‘소나무’ 패션 모델",
    Description: "소나무기획과 계약된 패션 브랜드 촬영에 모델로 참여하며 도매부터 소매 유통 전반의 의류·액세서리 촬영을 진행했고, 촬영 작가·MD·메이크업 아티스트·웹디자이너 등과 협업해 팀 단위 촬영 기획과 연출 보조 및 개인 촬영 작업을 수행했습니다.",
    ImagePath: 'images/sonamu.jpeg', 
    Tags: ['#모델에이전시', '#패션모델', '#뷰티모델'],
    URL: 'https://iridescent-way-9a2.notion.site/9f9ad4656a6542c78395209bb28a94d0',
  },
 {
    Title: "일본 ‘옥수수수염차’ 브랜드 모델",
    Description: "‘헬스하는 건강한 여성들이 즐겨 마시는 차’ 콘셉트의 촬영에 모델로 참여해 일본 여성 타깃에 맞춘 베이비페이스 및 붓기 케어 이미지를 연출했으며, 싱그러운 색감의 요가복과 녹색 계열의 차를 매치해 자연·웰니스 무드를 표현하고 맑고 청순한 표정 연출과 고난이도 요가 동작을 병행해 촬영을 진행했습니다.",
    ImagePath: 'images/corn.jpg', 
    Tags: ['#스포츠모델', '#패션모델', '#글로벌'],
    URL: 'https://iridescent-way-9a2.notion.site/e3eb57c9c3a542d1984a53217655fa6c', 
  },
{
    Title: "'이마트' 산하 페미닌 여성복 모델",
    Description: "가격대가 있는 고급 브랜드 촬영에 참여해 30–40대 여성 타깃에 맞춘 우아한 실루엣과 정제된 포즈로 하이엔드 이미지를 구현했으며, 사전 기획 단계부터 MD·사진작가와 협업해 콘셉트와 연출 방향 수립에 함께했습니다.",
    ImagePath: 'images/Emart.jpeg', 
    Tags: ['#하이앤드브랜드', '#패션모델', '#이미지모델'],
    URL: 'https://iridescent-way-9a2.notion.site/18f95f6b1d5e41d6926ad374a4af62fd', 
  },
{
    Title: "매트 브랜드 '일월' 쇼호스트",
    Description: "여름 한정판 '아이스킹 냉수매트' 라이브 방송을 위해 제조 원리와 유통 과정을 사전 학습하고, 상대호스트와 호흡에 맞춘 리허설과 소비자 눈높이 설명을 바탕으로 밝고 안정적인 진행을 수행했습니다.",
    ImagePath: 'images/January.jpeg', 
    Tags: ['#라이브방송', '#쇼호스트', '#세일즈'],
    URL: 'https://iridescent-way-9a2.notion.site/f3237454cc4c4773a7971dc87cc2be79', 
  },
{
    Title: "'3개의 장편 대학연극 기획 및 연출",
    Description: "무대 서사부터 대본·동선·연기·소품·음향·조명까지 전반적인 무대 연출을 총괄하며, 다수의 레퍼런스 분석을 바탕으로 소품과 스타일링에 서사적 의미를 부여해 몰입도 높은 무대를 구현했습니다.",
    ImagePath: 'images/Play.jpeg', 
    Tags: ['#연출가', '#연극기획', '#기획자'],
    URL: 'https://iridescent-way-9a2.notion.site/3-e41712381538478c87203b075b065316', 
  },
{
    Title: "'학보사 글로벌 기획 전담 기자",
    Description: "교내 글로벌 이슈를 주제로 보도 기획과 취재를 진행하고, 글로벌 교육 실태를 분석한 기획 기사 「글로벌과 글로벌 그 사이」와 칼럼을 집필했으며 교내 글로벌 신문 표지 모델로도 참여했습니다.",
    ImagePath: 'images/HandongPress.jpeg', 
    Tags: ['#기획기사', '#기획취재', '#캠퍼스미디어'],
    URL: 'https://iridescent-way-9a2.notion.site/f90f776beea944f9815f9a5e5422fe67', 
  },
{
    Title: "'뉴웨이브' 콘텐츠 에디터",
    Description: "패션 산업 자료 리서치와 시장 동향 분석을 바탕으로 발표를 진행하고, 업계 관계자 인터뷰와 함께 Adobe·Photoshop을 활용한 패션 지식 카드뉴스 콘텐츠를 기획·제작하며 교육까지 수행했습니다.",
    ImagePath: 'images/NewWave.jpeg', 
    Tags: ['#패션리서치', '#콘텐츠기획', '#패션산업'],
    URL: 'https://www.example.com/fashion-project', 
  },
{
    Title: "'영화 콘텐츠 소개 유튜브 채널 아나운서",
    Description: "하이틴 콘셉트 콘텐츠 리서치부터 촬영 기획안·대본 구성, 의상·메이크업 협업까지 주도하며 장면별 분위기에 맞춘 현장 리드와 자연스럽고 정확한 전달력으로 콘텐츠를 완성했습니다.",
    ImagePath: 'images/Announcer.jpeg', 
    Tags: ['#진행자', '#아나운서', '#MC'],
    URL: 'https://iridescent-way-9a2.notion.site/c9d161c2c85a48e8a4342a9782ef6ca7', 
  },
{
    Title: "경북 여성현장상담센터 새날 카드뉴스 에디터",
    Description: "경북 여성현장상담센터 '새날' 온라인 매거진 에디터로 활동하며 여성 성매매 관련 최신 이슈를 중심으로 시리즈 기획, 해외 자료 리서치, 기사 작성까지 담당해 총 30편 이상의 콘텐츠를 발행·관리했습니다.",
    ImagePath: 'images/saenal.png', 
    Tags: ['#온라인매거진', '#에디터', '#콘텐츠기획'],
    URL: 'https://iridescent-way-9a2.notion.site/2f75dcf5c6c180e1bff6f6a36fa327f6', 
  },
{
    Title: "외국인 대상 서울 홍보 매거진 에디터",
    Description: "외국인 독자를 대상으로 서울을 소개하는 영문 온라인 매거진을 기획·발행하며, 분기별 시리즈 콘셉트 설계와 다국적 독자 조사·피드백 반영을 통해 계절 단위의 장기 콘텐츠 운영 계획을 수립했습니다.",
    ImagePath: 'images/southkims.png', 
    Tags: ['#매거진', '#에디터', '#콘텐츠기획'],
    URL: 'https://iridescent-way-9a2.notion.site/2f75dcf5c6c1802ea9c4f677b40b0a1f', 
  },
];

const Projects: React.FC = () => {
  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-1 gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col md:flex-row gap-6 bg-[#E5E4E2] rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            onClick={() => handleProjectClick(project.URL)}
          >
            <img src={project.ImagePath} alt={project.Title} className="w-56 h-56 object-cover" />
            <div className="p-6 text-left flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#b8954b] mb-2">{project.Title}</h3>
              <p className="text-[#8c7851] mb-4 flex-grow">{project.Description}</p>
              <div className="flex flex-wrap gap-2">
                {project.Tags.map(tag => (
                  <span key={tag} className="bg-[#b8954b] text-white px-3 py-1 text-sm rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
