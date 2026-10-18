# 🌿 Portfolio — 개인 포트폴리오 웹사이트

> **함께 일하고 싶은 동료, 함께 성장하는 개발자**
> 
> 웹 퍼블리싱 경험과 프론트엔드 학습 과정을 바탕으로 제작한 개인 포트폴리오 웹사이트입니다  
> 스크롤 기반 인터랙션과 프로젝트 슬라이더를 활용해 주요 정보와 작업물을 확인할 수 있도록 구현했습니다.

🔗 [포트폴리오 웹사이트 바로가기](https://seoyeonkang12.github.io/portfolio/)

## 📌 프로젝트 개요

개인 작업물과 기술 역량을 한눈에 확인할 수 있도록 제작한 포트폴리오 웹사이트입니다.  
다크 배경과 클로버 그래픽을 활용해 디자인 콘셉트를 구성하고, 메뉴 이동 및 스크롤 애니메이션을 적용해 콘텐츠 탐색 경험을 개선했습니다.

- **프로젝트 유형 :** 개인 프로젝트
- **개발 기간 :** 2026.09 ~ 2026.09 (약 2일)
- **담당 역할 :** 기획, UI 디자인, 퍼블리싱, 인터랙션 구현
- **작업 환경 :** PC 화면 중심
- **주요 기술 :** HTML5, SCSS, JavaScript, jQuery, GSAP

## 🛠️ 기술 스택

- **Markup :** HTML5
- **Styling :** SCSS
- **Interaction :** JavaScript, jQuery
- **Animation :** GSAP, ScrollTrigger
- **Slider :** Swiper

## 🎯 프로젝트 목표

- 주요 정보와 프로젝트를 한눈에 확인할 수 있는 구조 설계
- 메뉴와 슬라이더를 연동해 콘텐츠 탐색 편의성 개선
- 스크롤 애니메이션으로 시각적 완성도 향상

## ✨ 주요 기능

- GNB 섹션 이동 및 활성 메뉴 연동
- 프로젝트 로고와 슬라이더 연동
- GSAP 스크롤 애니메이션
- 경력 정보 토글 기능

<!-- 메인 페이지 GIF 혹은 스크린샷 삽입 -->

## 💻 핵심 코드 구현

### 1. GNB 메뉴와 스크롤 위치 연동

메뉴 클릭 시 해당 섹션으로 부드럽게 이동하고, 스크롤 위치에 따라 현재 섹션의 메뉴가 활성화되도록 구현했습니다.

**💡 셀프 코드 리뷰**

- `animate()`로 부드러운 섹션 이동 구현
- `href` 속성으로 메뉴와 섹션 연결
- `isScrolling`으로 스크롤 이벤트 중복 처리 방지

~~~javascript
let isScrolling = false;

$('.gnb a').click(function(e) {
  e.preventDefault();

  $('.gnb li').removeClass('active');
  $(this).parent('li').addClass('active');

  let target = $(this).attr('href');
  let offsetTop = $(target).offset().top;

  isScrolling = true;

  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 600, function() {
    isScrolling = false;
  });
});
~~~

### 2. 프로젝트 로고와 슬라이더 연동

프로젝트 로고를 클릭하면 해당 슬라이드로 이동하고, 슬라이드가 변경되면 로고의 활성 상태도 함께 변경되도록 구현했습니다.

**💡 셀프 코드 리뷰**

- `index()`로 로고의 순서를 확인
- `slideToLoop()`로 해당 슬라이드 이동
- `realIndex`로 활성 로고 동기화

~~~javascript
$('.projects_logo > div').not('.line').click(function() {
  let index = $('.projects_logo > div').not('.line').index(this);

  $('.projects_logo > div').removeClass('active');
  $(this).addClass('active');

  swiper.slideToLoop(index, 500);
});

swiper.on('slideChange', function() {
  let activeIndex = this.realIndex;

  $('.projects_logo > div').removeClass('active');
  $('.projects_logo > div').not('.line').eq(activeIndex).addClass('active');
});
~~~

### 3. GSAP과 ScrollTrigger를 활용한 등장 애니메이션

스크롤 위치에 따라 콘텐츠가 자연스럽게 등장하도록 설정하고, stagger를 활용해 여러 요소가 순차적으로 나타나도록 구현했습니다.

**💡 셀프 코드 리뷰**

- `ScrollTrigger`로 애니메이션 실행 시점 설정
- `y`와 `opacity`로 등장 효과 구현
- `stagger`로 순차 애니메이션 적용

~~~javascript
gsap.registerPlugin(ScrollTrigger);

gsap.from('#about .profile_title > *', {
  scrollTrigger: {
    trigger: '#about .profile_title',
    start: 'top 80%',
  },
  y: 25,
  opacity: 0,
  duration: 0.7,
  stagger: 0.12,
});
~~~

### 4. 경력 정보 토글 기능

버튼 클릭 시 주요 업무 내용을 펼치거나 숨기고, 표시 상태에 따라 버튼 문구가 변경되도록 구현했습니다.

**💡 셀프 코드 리뷰**
- `slideToggle()`로 표시 상태 제어
- `toggleClass()`로 활성 상태 관리
- `hasClass()`로 버튼 문구 변경

~~~javascript
$('.work_btn').click(function() {
  $(this).next('.work_txt').slideToggle(300);
  $(this).toggleClass('active');
  
  if($(this).hasClass('active')){
    $(this).html('<i class="fa-solid fa-chevron-down"></i>주요 업무 내용 가리기');
  } else {
    $(this).html('<i class="fa-solid fa-chevron-down"></i>주요 업무 내용 보기');
  }
});
~~~

## 📂 프로젝트 폴더 구조

```text
portfolio/
├── css/
│   ├── main.css
│   ├── main.css.map
│   ├── main.scss
├── images/
├── js/
│   ├── main.js
│   ├── mainGsap.js
└── index.html
```

## 📝 프로젝트 회고

여러 프로젝트의 특징과 작업 과정을 하나의 웹사이트 안에서 효과적으로 전달하는 데 중점을 두었습니다. 프로젝트별 로고와 슬라이더를 연동해 작업물을 탐색할 수 있도록 구성하고, 다크 배경과 클로버 그래픽을 활용해 전체적인 디자인의 통일감을 유지했습니다.

이번 작업을 통해 개별 화면의 완성도뿐 아니라, 여러 콘텐츠가 하나의 포트폴리오 안에서 어떻게 연결되고 전달되는지도 함께 고려하게 되었습니다.
