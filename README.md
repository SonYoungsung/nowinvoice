## 개발 가이드
1. 리액트 컴포넌트는 함수형 컴포넌트를 사용합니다.
2. CSS 는 CSS 또는 SCSS 를 사용하며 라이브러리를 사용하지 않습니다.
3. 모든 컴포넌트들은 Ant.design 의 컴포넌트를 변경 또는 확장해서 사용 합니다.

## 화면 가이드

### Figma
https://www.figma.com/file/N8ngGl6HcudLGKjmjkqhgs/NowInvoices?node-id=1%3A124

### 로그인
1. 로그인 박스는 화면의 가운데에 위치 합니다.
2. 가장 하단에는 사이트의 주소가 표시 됩니다.

### 메인
1. 가운데 빈 공간은 캔버스 어플리케이션 위치 입니다.
2. 상단/왼쪽/오른쪽 레이아웃과 알림(Notification)이 표시됩니다.
3. 왼쪽의 아이콘을 클릭하면 왼쪽메뉴(Left Box)가 나타납니다.
4. 오른쪽 메뉴(Right Box)는 기본적으로 열려있는 상태입니다.
5. 최 상단 오른쪽 아이콘을 클릭하면 오른쪽 메뉴(Right Box)가 토글됩니다.
6. 비트코인 정보 화살표를 클릭하면 비트코인 종류를 선택할수 있는 메뉴가 나타납니다.
7. 유져 이름 정보 화살표를 클릭하면 유져 정보 메뉴가 나타납니다.
8. 초록색 'Checkout' 박스는 버튼 입니다.
9. Tab1/Tab2/Tab3 은 탭 형식의 버튼 이며 활성상태는 파란색 입니다. (탭메뉴 임시)
10. 오른쪽 하단은 알림표시(Notification)이 있으며 아래에서 위로 정렬 됩니다.

#### 메인-왼쪽메뉴(Left Box)
1. 메인 화면 왼쪽 아이콘을 누르면 나타나는 메뉴 입니다.
2. 카드 영역은 스크롤 형태 입니다. 
3. 상단 'Result History' 와 'View More History' 는 고정 입니다.

#### 메인-오른쪽메뉴(Right Box)
1. 메인 화면 오른쪽 상탄을 누르면 토글되는 메뉴 입니다. (기본적으로 열려있는 상태)
2. '-'/'+' 는 버튼 입니다.
3. 초록색 붉은색 박스는 버튼 입니다.
4. 'x' 표시가 있는 카드 박스 영역에서부터 하단까지 스크롤 입니다.
5. Finished/Error, -/+버튼, 초록색/붉은색 버튼, 비트코인 정보 까지 고정 입니다.

### 계정
1. 서브메뉴 이며 상단 탭메뉴가 변경 됩니다.
2. 서브컨텐츠에서는 오른쪽 상단 토글 버튼과 오른쪽메뉴(Right Box)가 표시되지 않습니다.
3. 서브 컨텐츠 박스는 가운데로 정렬 됩니다. 
4. 인풋 메뉴는 텍스트박스, 멀티텍스트박스, 셀렉트박스가 있습니다.

### 비트코인통계
1. 비트코인의 종류는 셀렉트 박스 입니다.
2. 하단 컨텐츠 메뉴는 테이블, 테이블 컨트롤, 페이지네이션 입니다.
3. 테이블 컨트롤의 왼쪽은 달력선택(Date Picker)입니다.
4. 테이블 컨트롤의 오른쪽은 On/Off 토글 버튼 입니다. (활성 : 초록색, 비활성 : 회색)
5. 테이블의 Status 는 태그박스 형태 입니다.

## Available Scripts

In the project directory, you can run:

### `yarn start` 

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
