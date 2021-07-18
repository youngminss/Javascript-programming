/**
 * JS
 * class 생성자에서 사용할 멤버변수의 경우, 초기화할 경우
 * 암묵적으로 선언되고 할당된다.
 */
{
  class Wizard {
    constructor(health, mana, armor) {
      this.health = health;
      this.mana = mana;
      this.armor = armor;
    }
    attack() {
      console.log("파이어볼🔥");
    }
  }
  const x = new Wizard(545, 210, 10);
  console.log(x.health, x.mana, x.armor);
  x.attack();
}
