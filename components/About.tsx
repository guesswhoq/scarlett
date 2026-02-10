
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="text-lg md:text-xl text-left text-[#8c7851] space-y-6 leading-relaxed">
        <p className="text-center text-2xl mb-12 italic">
          “취향을 선택이 되게 만드는 사람”
        </p>
        <p>
          안녕하세요! 👋 사람들의 취향을 선택으로 이어지도록 만드는 김혜민입니다.
        </p>
        <ul className="space-y-4 list-none pl-0 mt-8">
          <li><span className="text-[#b8954b] font-bold">✓ Insight Builder:</span> 한번 주목한 대상은 끝까지 파고들어 전문가 수준의 인사이트를 찾아냅니다.</li>
          <li><span className="text-[#b8954b] font-bold">✓ Trend Interpreter:</span> 트렌드를 소비하기보다, 브랜드에 맞는 방향으로 해석해 전략에 반영합니다.</li>
          <li><span className="text-[#b8954b] font-bold">✓ Cross Cultural:</span> 북미•아시아•유럽의 문화 경험을 토대로 세상을 바라봅니다.</li>
          <li><span className="text-[#b8954b] font-bold">✓ Concept Creator:</span> 아이디어를 브랜드에 맞는 컨셉과 메시지로 구체화해 실행합니다.</li>
        </ul>
      </div>
    </Section>
  );
};

export default About;
