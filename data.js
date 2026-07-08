const SITE = {
    header: {
        logo: './img/logo.png',
        menu: [
            { href: 'https://github.com/nogglee', icon: 'github' },
            { href: 'https://velog.io/@nogglee/series', icon: './img/velog.png' },
            { href: 'mailto:dev@nogglee.com', icon: 'gmail' },
        ],
    },

    profile: {
        img: './img/profile.png',
        links: [
            { label: 'Blog', href: 'https://velog.io/@nogglee/series' },
            { label: 'GitHub', href: 'https://github.com/nogglee' },
            { label: 'Email', href: 'mailto:dev@nogglee.com' },
        ],
    },

    nav: [
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'career', label: 'Career' },
        { id: 'activities', label: 'Activities' },
    ],

    coreSystem: {
        id: 'about_01',
        headingHtml: '반복되는 문제는 <underline>시스템에서 원인</underline>을 찾습니다',
        bullets: [
            '반복되는 실수는 개인의 주의력보다 구조적 문제의 징후로 봅니다.',
            '업무 흐름, 데이터 구조, 화면 구조에서 문제가 반복되는 지점을 찾습니다.',
            '매뉴얼을 보강하기보다 실수가 발생하기 어려운 제품과 개발 환경을 설계합니다.',
        ],
    },

    coreCost: {
        id: 'about_02',
        headingHtml: '사용자와 개발자의 <underline>행동 비용을 줄이기</underline> 위해 고민합니다',
        bullets: [
            '사용자 경험뿐 아니라 개발자 경험도 제품 완성도의 일부로 봅니다.',
            'UX에서는 불필요한 선택, 입력, 탐색 단계를 줄여 목적까지의 경로를 단축합니다.',
            'DX에서는 공통 UI, API Contract, CI/CD 파이프라인으로 구현·배포 기준을 표준화합니다.',
        ],
    },

    career: [
        {
            logo: { src: './img/ibrdos.png', alt: 'IBRDOS 로고' },
            company: 'IBRDOS',
            role: 'PM · Product',
            period: '2022.09 ~ 2025.11',
            links: [],
            entries: [
                {
                    title: '비즈니스 가설 검증 도구',
                    serviceUrl: 'https://godmulju.vercel.app/',
                    summaryHtml: '신규 서비스 런칭 전, <b>유저가 실제로 어떤 메시지와 가치에 반응하는지 검증하기 위해</b> MBTI 기반 심리테스트 형태의 유입 실험 도구를 직접 기획·개발·배포했습니다.<br>\n테스트 결과를 통해 서비스 랜딩페이지로 자연스럽게 유입되는 구조를 설계했습니다.',
                    tags: ['React', 'TailwindCSS', 'Vercel', 'Firebase', 'Figma'],
                    blocks: [
                        {
                            headline: '비즈니스 가설을 ‘실험 가능한 형태’로 만들었습니다.',
                            groups: [
                                {
                                    title: '마케팅 방식만으로는 초기 유저 반응 확보 어려움',
                                    items: [
                                        '랜딩페이지와 SEO만으로는 신규 서비스에 대한 관심도를 파악하는 데 한계가 존재',
                                        '개발 리소스 부족으로 신규 유입 도구 제작은 우선순위에서 계속 밀리는 상황',
                                    ],
                                },
                                {
                                    title: '직접 실험 가능한 형태로 문제 전환',
                                    items: [
                                        '심리테스트라는 낮은 진입 장벽의 포맷을 선택해 참여를 유도',
                                        '테스트 완료 시점에 서비스 가치와 연결된 메시지를 노출',
                                        '사용자 응답 데이터를 Firebase에 적재해, 추측이 아닌 실제 반응으로 가설을 검증',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: '논리적 설계를 통해 전환 흐름을 만들었습니다.',
                            groups: [
                                {
                                    title: '단순 체험으로 끝나지 않고, 행동으로 이어지도록 흐름을 설계',
                                    items: [
                                        '유저의 테스트 응답과 결과 맥락을 분석해, 결과 페이지 내에 <b>맞춤형 CTA</b> 배치',
                                        '테스트 → 결과 → 랜딩페이지로 이어지는 경로를 끊기지 않게 설계',
                                        '심리테스트 콘텐츠로 시작해 서비스에 대한 호기심을 유발할 수 있는 메세지 전달',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    title: '팀 생산성 향상 도구',
                    serviceUrl: 'https://urbuild.vercel.app/',
                    summaryHtml: 'GA4 측정을 위해 UTM 파라미터가 포함된 URL을 수작업으로 생성하는 과정에서, <b>반복적인 시간 비용과 입력 오류로 인해 측정이 생략되는 운영 리스크를 인식했습니다.</b><br>\n개인 숙련도에 의한 영향력을 줄이기 위해 URL 생성 과정을 도구화했습니다.',
                    tags: ['React', 'TailwindCSS', 'Vercel', 'Firebase', 'Figma'],
                    blocks: [
                        {
                            headline: '작은 불편함을 비즈니스 관점에서 리스크로 정의했습니다.',
                            groups: [
                                {
                                    title: '업무 흐름을 방해하던 반복 비용 제거',
                                    items: [
                                        'UTM 파라미터 조합을 매번 직접 입력해야 하는 번거로운 작업 반복',
                                        '파라미터 누락·오타로 인한 데이터 정확도 저하',
                                        '링크 생성 피로도로 인해 <b>측정 자체가 생략되는 운영 리스크</b> 확인',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: '도구를 활용해 팀의 업무 방식을 최적화했습니다.',
                            groups: [
                                {
                                    title: 'UTM 개념에 익숙하지 않은 사용자도 사용 가능한 UX 설계',
                                    items: [
                                        'UTM 파라미터 입력 항목을 질문 형태로 구성',
                                        '입력값을 기반으로 URL을 자동 조합해 <b>실수 가능성을 원천적으로 제거</b>',
                                        '반복 작업 시간을 단축해 팀 전체의 업무 흐름을 빠르게 개선',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    title: 'PAWPAWNUT Biz (서비스 종료)',
                    summaryHtml: '오프라인 반려동물 케어 업종을 위한 CRM 솔루션 \'포포넛 Biz\'의 제품 생애주기 전반을 PM으로서 리드했습니다.<br>\n<b>시장 분석부터 현장 밀착형 인터뷰, 가격 모델 설계 및 운영 데이터 기반의 제품 고도화</b>까지, 고객 접점의 인사이트를 실제 제품의 핵심 기능으로 구현했습니다.',
                    tags: ['Product Management', 'User Research', 'Pricing Strategy', 'Data-driven Improvement'],
                    blocks: [
                        {
                            headline: '현장에서 직접 보고 들으며 \'진짜 문제\'를 정의했습니다.',
                            groups: [
                                {
                                    title: '100여 개 업장 방문을 통한 문제 발굴',
                                    items: [
                                        '매장을 직접 방문하여 사장님의 실제 작업 흐름 관찰',
                                        '기존 솔루션 사용 시 발생하는 기능적 제약과 불편함 인터뷰',
                                        '경쟁 제품이 해결하지 못한 현장의 세밀한 요구사항 발굴',
                                        '수집된 피드백을 바탕으로 제품의 핵심 차별화 기능 우선순위 설정',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: '사용자 의견에서 제품 개선 방향성을 찾았습니다.',
                            groups: [
                                {
                                    title: '사용자 불편을 기술적 요구사항으로 번역',
                                    items: [
                                        '기술 용어 대신 사용자가 이해하기 쉬운 언어로 풀어서 안내',
                                        '문의 유형별 가이드를 제작해 빠르고 일관된 응대 환경 구축',
                                        '단순 불만에서 구조적 결함을 파악해 재현 시나리오로 정리',
                                        '재현 시나리오를 기술적 요구사항으로 정의하여 개발팀에 전달',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: '데이터를 기반으로 제품을 개선했습니다.',
                            groups: [
                                {
                                    title: '데이터 기반 다이나믹 요금제 및 시뮬레이터 설계',
                                    items: [
                                        '기존 요금제의 이탈 원인을 분석해 맞춤형 다이나믹 요금제 제안',
                                        '요금제 선택의 심리적 장벽을 낮추기 위한 요금제 시뮬레이터를 기획',
                                        '시뮬레이터 내 행동 데이터를 수집 가능하도록 설계',
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    // TODO: 포트폴리오 4p 원문 있으면 링크 추가
                    title: '조직 내부 협업 대시보드 및 운영 구조 개선',
                    summaryHtml: '다수 프로젝트를 동시 운영하는 10인 조직(Dev 4 / Design 2 / Ops 2 / PM 2)의 협업 대시보드와 운영 프로세스를 설계했습니다.<br>\nPM으로서 서비스 기획 / 프로젝트 리딩 / 고객 커뮤니케이션을 담당했습니다.',
                    tags: ['JavaScript', 'Notion', 'ClickUp', 'Telegram Bot', 'Figma', 'Project Management'],
                    blocks: [
                        {
                            headline: '정보 비대칭과 협업 방식 차이를 표준 프로세스로 해소했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '다수 프로젝트를 동시 운영하며 진행 현황이 개인에게 흩어져 정보 비대칭이 발생, 운영 대시보드로 현황을 한 곳에 통합해 하루 2회 이상 오가던 진행 상황 확인 커뮤니케이션을 대시보드 확인으로 대체',
                                        '일정·이슈 관리 방식이 사람마다 달라 협업이 매번 어긋났고, 협업 프로세스를 표준화해 누구나 같은 방식으로 운영 → 신규 인원 온보딩 <highlight>2주 → 3일</highlight>로 단축',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: '협업 도구와 문서·QA 프로세스를 하나로 통합했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '협업 도구가 흩어져 필요한 정보를 찾는 데 시간이 들었고, Notion(초반)·ClickUp(후반) 기반 단일 운영 체계로 정착 → 정보 탐색 시간 건당 <highlight>10분 → 2분</highlight>으로 단축',
                                        '기능 정의를 텍스트로만 작성해 문서가 비대해지고 개발 중 로직 변경 시 플로우 파악이 느렸고, 기능 정의를 표·플로우차트로 표준화 → 문서 작성 시간·분량 <highlight>1/3 이하</highlight>로 단축, 로직 변경 대응 속도 개선',
                                        '기능 검수·배포 기준이 정립되지 않아 같은 오류가 반복되고 릴리즈가 들쭉날쭉했고, 브랜치 기반 QA·이슈 관리 프로세스를 정의해 검수·배포·피드백을 일관된 절차로 표준화 → 릴리즈 주기 안정화',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],

    projects: [
        {
            logo: { src: './img/todam.png', alt: '토담 썸네일' },
            company: '토담',
            role: '부트캠프 · FE(팀장)',
            period: '2026.05 ~ 2026.06',
            links: [
                { href: 'https://github.com/nogglee-crew/todam', img: './img/icon-github.png', alt: 'GitHub' },
                { href: 'https://todam.app', img: './img/icon-web.png', alt: 'Demo' },
                { href: 'https://www.figma.com/design/rn4Vgem0Uj28suP8TEZMbU/%ED%86%A0%EB%8B%B4-todam?node-id=8542-18666&t=Vb5ZUTnhJAmg9FpN-1', img: './img/icon-figma.png', alt: 'Figma' },
            ],
            entries: [
                {
                    title: '원데이 클래스 예약관리 플랫폼',
                    // TODO: 상장 이미지 업로드되면 확장자 확인(현재 .png로 가정)
                    extraLinks: [{ label: '수상 내역 보기 ↗', url: S3 + 'certificate-01.png' }],
                    summaryHtml: '<b>부트캠프 최종 프로젝트 · CTO 선정 1위</b><br>\n공방 원데이 클래스 예약·운영을 위한 B2C/B2B 플랫폼입니다.<br>\nNext.js 기반 web/admin 모노레포를 구성하고, 공통 UI 패키지·API Contract·CI/CD 파이프라인을 설계해 팀 개발 속도와 배포 안정성을 개선했습니다.',
                    tags: ['TypeScript', 'Next.js', 'GitHub Actions', 'Docker', 'AWS EC2', 'Claude Code'],
                    blocks: [
                        {
                            headline: '디자인 시스템으로 디자인 일관성과 유지보수성을 개선했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        'web/admin의 UI 구현 기준이 분산되어 디자인 일관성과 유지보수성이 저하됨',
                                        'Tailwind 기반 시안을 공통 커스텀 디자인 시스템으로 확장하기로 결정',
                                        'Primitive/Semantic Token 구조를 설계하고 컴포넌트가 Semantic Token만 참조하도록 적용',
                                        '공통 UI 유지보수 대상 <highlight>2개 앱 → 1개 패키지</highlight>, 코드 보정 시간 <highlight>약 20분 → 3분</highlight>',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: 'AI Harness로 기획 해석 차이로 인한 재작업을 줄였습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '동일 기획 문서 내에서도 API 응답 구조·비즈니스 로직 해석 차이 발생',
                                        '구현 전 API Contract를 고정하는 개발 워크플로우로 문제를 재정의',
                                        '요청/응답 스키마를 Plan 문서에 스냅샷으로 고정, Zod Schema를 런타임 검증·타입 추론에 공통 적용 <input type="button" class="text_button" value="PR 보기 ↗" onclick="window.open(\'https://github.com/prgrms-fullcycle-devcourse/webfull_9_10_todam/pull/38\', \'_blank\', \'noopener,noreferrer\')">',
                                        '구현 조율 요청 평균 <highlight>4회 → 1회</highlight>, QA 재작업률 <highlight>70% → 20%</highlight>',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: 'CI/CD 파이프라인으로 배포 실패 감지와 운영 안정성을 개선했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '수동 SSH 배포로 절차 누락, EC2 디스크 부족, pull 실패 감지 누락 발생',
                                        '배포 자동화와 실패 즉시 중단 기준을 포함한 CI/CD 파이프라인으로 재설계',
                                        'build → ECR push → EC2 deploy 자동화, image prune, set -euo pipefail, 헬스체크 로그 출력 적용',
                                        'EC2 디스크 사용률 <highlight>92% → 65%</highlight>, 동일 배포 장애 <highlight>재발 0건</highlight>',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            logo: { src: './img/tomado.png', alt: '토마두 썸네일' },
            company: '토마두',
            role: '부트캠프 · FE(팀원)',
            period: '2026.03 ~ 2026.04',
            links: [
                { href: 'https://github.com/prgrms-fullcycle-devcourse/webfull_9_10_Tomado_FE', img: './img/icon-github.png', alt: 'GitHub' },
                { href: 'https://tomado-dev.vercel.app', img: './img/icon-web.png', alt: 'Demo' },
                { href: 'https://www.figma.com/design/7vgz8rPzlc7PdjtfyDtsKu/Toma-do?node-id=2-3&t=4BucU4yFjBMX451t-1', img: './img/icon-figma.png', alt: 'Figma' },
            ],
            entries: [
                {
                    title: '포모도로 타이머 기반 집중 관리 도구',
                    extraLinks: [{ label: '개발기 보기 ↗', url: 'https://velog.io/@nogglee/series/tomado' }],
                    summaryHtml: '포모도로 타이머로 집중 세션을 관리하고, 회고 시스템으로 기록을 추적하는 집중 관리 도구입니다. 프론트엔드 개발 / UX 설계 / 디자인 시스템 구축 / 성능 최적화를 담당했습니다.',
                    tags: ['TypeScript', 'React', 'Zustand', 'TanStack Query', 'Orval'],
                    blocks: [
                        {
                            headline: '서버 응답을 기다리지 않고도 즉시 반응하는 인터랙션을 만들었습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '서버 응답 완료 후 UI가 갱신되어 Todo 입력·정렬 시 체감 지연이 발생했고, 타이머 실행 중 진행 상황 확인을 위한 불필요한 탭 전환과 마우스 의존적인 조작이 반복됨',
                                        '요청 완료를 기다리는 대신 화면을 먼저 반영하고, 실패한 시점에만 되돌리는 방식으로 설계 방향을 전환',
                                        'TanStack Query optimisticUpdate로 서버 응답 전 UI를 선반영하고 실패 시 롤백 처리, 삭제 요청은 토스트 노출 시간만큼 디바운스해 실행취소(Undo) 지원, document.title 동적 갱신으로 탭 이탈 없이 타이머 상태 노출, 전역/컨텍스트 단축키 스코프 분리 <input type="button" class="text_button" value="PR 보기 ↗" onclick="window.open(\'https://github.com/prgrms-fullcycle-devcourse/webfull_9_10_Tomado_FE/pull/69\', \'_blank\', \'noopener,noreferrer\')"><input type="button" class="text_button" value="PR 보기 ↗" onclick="window.open(\'https://github.com/prgrms-fullcycle-devcourse/webfull_9_10_Tomado_FE/pull/81\', \'_blank\', \'noopener,noreferrer\')">',
                                        'Todo 입력·정렬 시 <highlight>서버 응답 대기 없이 즉시 반영</highlight>, <highlight>탭 전환 없이</highlight> 타이머 상태 확인, <highlight>마우스 없이</highlight> 집중모드 전 구간 조작 가능',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: 'Critical Path를 줄여 초기 렌더링 성능을 개선했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '메인 화면 진입 시 당장 쓰지 않는 이미지·음원 리소스가 즉시 로드되어 초기 렌더링을 지연시켰고, 코드 스플리팅이 적용되지 않아 불필요한 코드가 초기 번들에 포함됨',
                                        '전체 리소스를 한 번에 받는 대신, 필요한 시점에만 리소스를 요청하고 라우트 단위로 번들을 쪼개는 방향으로 결정',
                                        '이미지·음원에 Lazy Loading 적용, Route 기반 Code Splitting으로 초기 번들 분리 <input type="button" class="text_button" value="PR 보기 ↗" onclick="window.open(\'https://github.com/prgrms-fullcycle-devcourse/webfull_9_10_Tomado_FE/pull/64\', \'_blank\', \'noopener,noreferrer\')">',
                                        '초기 번들 <highlight>2,581KB → 763KB</highlight>로 약 70% 감소, LCP <highlight>5.46s → 1.43s</highlight>로 약 74% 개선',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: 'OpenAPI 스펙 변경을 프론트 코드에 자동 동기화했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '백엔드에서 API Spec이 바뀔 때마다 프론트의 타입과 함수를 수동으로 맞춰야 해서 동기화 누락과 휴먼 에러가 반복됨',
                                        '수동 반영 대신, 스펙 변경을 감지해 프론트 코드를 자동 생성하는 파이프라인으로 문제를 전환',
                                        'Orval로 백엔드 Swagger 기반 API 함수·타입·React Query 훅을 자동 생성, 백엔드 Spec 변경 시 repository_dispatch 이벤트로 GitHub Actions가 프론트 레포에 Orval 재생성 PR을 자동 생성',
                                        'Spec 변경 → PR 생성까지 파이프라인 자동화로 <highlight>API 함수 232개 · 타입 67개</highlight> 자동 생성, 타입 불일치·누락으로 인한 런타임 에러 <highlight>0건</highlight>',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: 'Orval 커스텀 Mutator에 인증 토큰 재발급 로직을 구현했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '자동 생성된 API 훅마다 401 처리와 토큰 재발급 로직을 개별 구현하면 코드가 중복되고, 여러 요청이 동시에 만료되면 refresh 요청이 중복 발생할 위험이 있었음',
                                        '각 API 호출부가 아닌, Orval이 모든 요청에 공통으로 쓰는 커스텀 fetch mutator 한 곳에 인증 로직을 두기로 결정',
                                        'customInstance에서 401 응답 시 refresh 쿠키로 세션을 복구한 뒤 원요청을 재시도하도록 구현, 모듈 스코프 refreshPromise로 동시에 401이 발생해도 refresh 요청이 1회만 나가도록 싱글톤 처리',
                                        '232개 자동 생성 API 함수 전체에 인증 재발급 로직 <highlight>공통 적용</highlight>, 동시 다발적 401 상황에서도 <highlight>refresh 요청 1회로 중복 방지</highlight>',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            logo: { src: './img/lettoast.png', alt: '랫츠토스트 썸네일' },
            company: '랫츠토스트',
            role: '개인 · FullStack',
            period: '2024.11',
            links: [
                { href: 'https://github.com/nogglee/letstoast', img: './img/icon-github.png', alt: 'GitHub' },
                { href: 'https://letstoast.vercel.app/ko', img: './img/icon-web.png', alt: 'Demo' },
            ],
            entries: [
                {
                    title: '연설 모임 시간지기 타이머',
                    summaryHtml: '연설 모임(토스트마스터즈)에서 연설 시간에 맞춰 색상 카드를 바꿔주는 ‘시간지기’ 역할을 돕기 위한 디지털 타이머입니다.<br>\n기획부터 개발, 다국어 대응, 배포까지 개인 프로젝트로 진행했습니다.',
                    tags: ['React', 'React Router', 'react-i18next', 'TailwindCSS', 'Webpack', 'Vercel'],
                    blocks: [
                        {
                            headline: '수동 카드 조작을 상태 기반 자동 전환으로 대체했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '시간지기가 수동으로 카드를 넘겨야 해서 연설 내용에 집중하지 못했고, 연설 유형별 규정 시간마다 기준을 매번 계산해야 했음',
                                        '수동 조작 대신 경과 시간 상태에 따라 화면이 자동 전환되는 구조로 설계하기로 결정',
                                        '연설 유형별 임계값을 상수 테이블로 정의, <code>setInterval</code> 기반 경과 시간과 비교해 배경색 상태를 자동 전환, 커스텀 시간 입력도 동일 로직으로 처리',
                                        '시간지기의 수동 조작 제거, 연설 유형에 관계없이 하나의 로직으로 시간 관리 자동화',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: '작은 숫자 대신 화면 전체로 시간 신호를 전달했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '온라인 화면 공유 환경에서 작은 숫자 타이머는 참여자가 놓치기 쉬웠음',
                                        '텍스트 가독성에 의존하는 대신, 화면 전체 배경색을 상태 신호로 쓰는 방식으로 결정',
                                        '타이머 상태(그린 · 옐로 · 레드)를 배경색 클래스에 매핑, 만료 임박 구간은 <code>animate-blink</code>로 추가 강조',
                                        '해상도·화면 크기와 무관하게 곁눈질만으로 남은 시간 인지 가능한 시각 피드백 확보',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: '언어별 정적 페이지를 빌드 타임에 생성했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        'CRA 기본 빌드는 단일 index.html만 생성해 언어별 SEO 메타를 분리할 수 없었고, 정적 호스팅 환경이라 서버 사이드 언어 감지도 불가능했음',
                                        '런타임 리다이렉트 대신, 빌드 시점에 언어별 정적 HTML을 각각 생성하는 방식으로 결정',
                                        '<code>HtmlWebpackPlugin</code>으로 index/index.ko/index.en 3개 HTML 생성, 빌드 후 스크립트로 해시된 CSS/JS 경로를 3개 파일에 동기화, vercel.json 라우팅으로 /ko·/en 경로 매핑',
                                        '서버 없이도 언어별 SEO 메타 분리, 배포 파이프라인에 편입해 수동 경로 수정 제거',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            logo: { src: './img/nullnull.png', alt: '널널 썸네일' },
            company: '널널',
            role: '부트캠프 · BE(팀원)',
            period: '2026.04 ~ 2026.06',
            links: [
                { href: 'https://github.com/nogglee-crew/nullnull', img: './img/icon-github.png', alt: 'GitHub' },
                { href: 'https://www.nznz.app/', img: './img/icon-web.png', alt: 'Demo' },
            ],
            entries: [
                {
                    title: '약속 장소·시간 조율 서비스',
                    summaryHtml: '여러 참여자의 가능 시간과 출발지를 모아 약속 장소·시간 후보를 조율하는 서비스입니다.<br>\n백엔드 구현을 담당했고, 전반적인 서비스 기획과 데이터 설계도 함께 맡았습니다. <input type="button" class="text_button" value="API 문서 ↗" onclick="window.open(\'https://api.nznz.app/api-docs\', \'_blank\', \'noopener,noreferrer\')"> <input type="button" class="text_button" value="Data 모델링 ↗" onclick="window.open(\'https://nogglee.notion.site/Data-9ace8fe23c0e82139d5481001b1ab9c4?pvs=74\', \'_blank\', \'noopener,noreferrer\')">',
                    tags: ['TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Supabase', 'Jest', 'Swagger'],
                    blocks: [
                        {
                            headline: '시간 후보를 참여자 가능 집합 기준으로 그룹화해 조회 API를 설계했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '단순 가능 인원 수만으로 시간 후보를 집계하면, 실제로 겹치는 참여자 구성이 다른 시간대도 하나의 후보로 뭉뚱그려져 부정확한 후보가 노출됨',
                                        '인원 수 집계 대신, 실제 가능한 참여자 집합이 동일한 연속 시간 구간만 하나의 후보로 묶는 방식으로 알고리즘을 재설계',
                                        '참여자 집합이 같은 연속 구간을 하나의 time_option으로 병합해 rank 순으로 반환하도록 구현, 응답에 submittedParticipantCount·availableCount·unavailableParticipants를 포함해 프론트가 추가 가공 없이 "전원 가능 / n명 가능 / 불가자" chip을 바로 렌더링하도록 설계 <input type="button" class="text_button" value="PR 보기 ↗" onclick="window.open(\'https://github.com/prgrms-fullcycle-devcourse/webfull_9_10_nullnull_BE/pull/34\', \'_blank\', \'noopener,noreferrer\')">',
                                        '방장 외 접근은 <highlight>403</highlight>, READY 상태가 아닌 방 조회는 <highlight>409</highlight>로 구분해 FE가 별도 분기 없이 상태 코드만으로 에러 케이스 처리 가능',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: '회원 탈퇴 시 데이터 무결성과 활성 방 상태를 함께 관리했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '단순 계정 삭제는 참여 기록·방 데이터의 무결성을 깨뜨릴 수 있었고, 방장이 진행 중인 방이 있는 상태로 탈퇴하면 참여자들의 약속이 붕 뜨는 문제가 있었음',
                                        '완전 삭제 대신 소프트 삭제로 전환하고, 탈퇴 가능 여부를 진행 중인 방 상태에 연동해 판단하는 방식으로 설계',
                                        'users.status(ACTIVE/DELETED)로 소프트 삭제 처리, 탈퇴 시 participants.user_id를 null 처리해 과거 참여 기록은 유지하되 계정 연결만 해제, COLLECTING 상태 방의 방장이면 탈퇴를 차단(409), JwtAuthGuard에서 탈퇴 계정의 이후 API 접근을 차단 <input type="button" class="text_button" value="PR 보기 ↗" onclick="window.open(\'https://github.com/prgrms-fullcycle-devcourse/webfull_9_10_nullnull_BE/pull/37\', \'_blank\', \'noopener,noreferrer\')">',
                                        '탈퇴 후에도 과거 참여 기록은 유지되면서 개인 식별 정보만 분리, 진행 중인 방을 가진 방장의 탈퇴로 인한 데이터 정합성 문제 원천 차단',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            logo: { src: './img/backoffice.png', alt: '백오피스 썸네일' },
            company: '백오피스',
            role: '용역 계약 · FullStack',
            period: '2025.06 ~ 2025.08',
            links: [],
            entries: [
                {
                    title: '뷰티 브랜드사 멀티채널 주문·정산 자동화 시스템',
                    summaryHtml: '뷰티 브랜드사의 12개 판매채널 주문을 통합 수집해 정산·통계를 관리하는 운영자용 백오피스입니다. 기획부터 API 설계·구현, AWS 인프라 구축, 프론트엔드까지 1인 풀스택으로 개발했습니다.',
                    tags: ['Python', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'JavaScript'],
                    blocks: [
                        {
                            headline: '엑셀 업로드 기반 멀티채널 주문 통합 파이프라인을 구축했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '12개 오픈마켓 채널마다 동일 제품 조합이 매번 다른 상품명으로 판매되어, 3PL 발송 시 묶음 주문을 제품별 행으로 매번 수기 분해해야 했고 일 평균 500건 기준 하루 3시간 이상이 소요됨',
                                        '채널별 이기종 필드를 표준 스키마로 맵핑하는 수집·정규화·적재 계층을 구현하고, 상품명이 달라도 동일 매칭코드로 묶어 SKU 구성을 식별하는 구조로 설계 (Exact-match만 자동 처리)',
                                        '최근 7일 윈도우 내 주문코드를 Set 자료구조로 적재해 O(1) 멤버십 체크로 중복 판정, 매칭코드로 제품구성을 역참조해 단가×수량 explode 연산으로 3PL 행 자동 생성',
                                        '검증 데이터(<highlight>11,881건</highlight>) 기준 상품명 매칭 정확도 <highlight>100%</highlight>, 3PL 발송 문서 변환 <highlight>하루 3시간 이상 → 5분</highlight>으로 단축',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: '이벤트 기반 실시간 통계 집계 구조로 전환했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '담당자가 매일 채널별 어드민에 접속해 엑셀로 매출·주문 데이터를 수기 취합했고, 반품 발생 시에도 합산액을 수기로 마이너스 처리해 어떤 상품이 반품되었는지 제품별 내역이 남지 않음',
                                        '인보이스 INSERT 이벤트를 DynamoDB Streams로 감지해, 집계 시점을 조회 시가 아닌 쓰기 시점으로 옮기는 Write-time Aggregation 구조로 설계',
                                        '매칭코드로 상품구성을 조회해 실제 판매수량을 계산하고 채널별·신규-재구매별 값을 원자적 update expression으로 누적, 반품 입력 시 채널/제품 코드별 판매 수량을 차감해 상품 단위 반품 내역까지 추적',
                                        '검증 데이터(<highlight>11,881건</highlight>) 기준 집계 합계와 원본 주문 데이터 합계 <highlight>오차 0원</highlight>, 1시간가량 걸리던 수기 취합을 인보이스 생성 시점 <highlight>즉시 반영</highlight>으로 대체',
                                    ],
                                },
                            ],
                        },
                        {
                            headline: '다차원 매출·고객 통계를 대시보드 API로 제공했습니다.',
                            groups: [
                                {
                                    title: '',
                                    items: [
                                        '채널·기간·상품별 매출/주문 지표를 확인하려면 엑셀 피벗 등 수작업이 필요했고, 원하는 기간 단위로 매출·신규/재구매 비율을 잘라볼 수 있는 조회 도구가 없었음',
                                        '오늘/어제/주/월/년/커스텀 단위의 기간 조건을 유연하게 파싱하고, 신규/재구매 비율을 일자별로 계산해 프론트에서 가공 없이 바로 바인딩 가능한 시계열 payload로 응답을 설계',
                                        '다축 집계로 늘어난 연산량은 Lambda 메모리를 상향해 CPU 리소스를 확보하는 방식으로 대응',
                                        '<highlight>11,881건, 매출 10억원대, 고객 1,953명</highlight> 기준 기간×채널×상품 조합 조회 정상 동작 확인, 대시보드 진입·필터링 변경 시 CloudWatch 기준 응답시간 <highlight>300ms 이하</highlight> 유지',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],

    activities: [
        {
            title: 'Notion 크리에이터',
            period: '2025.05 ~ ing',
            descHtml: '기능명세서·API명세서, IT 프로젝트 관리, 팀 스케줄 관리, 회의록, 업무일지 등 업무 생산성 노션 템플릿을 제작·배포하고 있습니다. 누적 조회 <b>4만</b>, 다운로드 <b>1.42만</b>을 기록했습니다.',
            button: { label: '템플릿 보기 ↗', url: 'https://www.notion.com/ko/@nogglee' },
        },
        {
            title: '프로그래머스 웹 풀스택 데브코스 9기',
            period: '2025.12 ~ 2026.06',
            descHtml: 'Git·GitHub 협업부터 Node.js·Express·Docker·MariaDB 기반 백엔드, RDBMS·JWT 인증, REST API 설계, React·TypeScript·Redux·Testing 프론트엔드까지 풀스택 커리큘럼을 이수했습니다. BOOK-STORE·TODO-LIST 등 미니 프로젝트로 매 단계를 직접 구현하며 학습했습니다.',
            button: { label: '학습로그 보기 ↗', url: 'https://github.com/nogglee/programmers-devcourse' },
        },
        {
            title: '북 스터디',
            descHtml: '매주 계획한 챕터를 읽고 주 1회 인사이트를 공유하는 모임을 진행<br>・ 그림으로 이해하는 알고리즘',
            button: { label: '대표 아티클 ↗', url: 'https://velog.io/@nogglee/algorithm-14' },
        },
    ],
};
