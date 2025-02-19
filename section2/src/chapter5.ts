// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// enum 타입은 컴파일이 되어도 사라지지 않는다.
enum Role {
  ADMIN = 0, // 숫자 할당 제거하면 0,1,2
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "홍길동",
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: "김길동",
  role: Role.USER,
  language: Language.english,
};

const user3 = {
  name: "이길동",
  role: Role.GUEST,
  language: Language.english,
};

console.log(user1, user2, user3);
