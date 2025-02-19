// 타입 별칭
// 타입 별칭은 같은 스코프 내에선 중복되지 않도록
type User = { id: number; name: string; nickname: string; birth: string };

let user1: User = {
  id: 1,
  name: "홍길동",
  nickname: "길동",
  birth: "2000.01.04",
};
let user2: User = {
  id: 2,
  name: "김길동",
  nickname: "길동1",
  birth: "2000.01.04",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Koream: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시 Korea 프로퍼티를 가져라. 그리고 Korea의 타입은 인덱스에서 정의한 number여야한다.
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
