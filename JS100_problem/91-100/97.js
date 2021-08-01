/**
 * JS, 단순배열의 경우, 배열 내 모든 원소 or 특정 원소에 대한 판단 법인
 * - Array.prototype.every();
 * - Array.prototype.some();
 * 너무 좋다. 계속 잘 사용하자.
 */
{
  function initLoadToTruck(trucks, deliveryTimes) {
    for (let i = 0; i < trucks.length; i++) {
      trucks[i] = deliveryTimes.shift();
    }
  }
  function loadToTruck(trucks, deliveryTimes) {
    for (let i = 0; i < trucks.length; i++) {
      if (trucks[i] === 0 && deliveryTimes.length !== 0) {
        trucks[i] = deliveryTimes.shift();
      }
    }
  }
  function oneTickTruck(trucks) {
    for (let i = 0; i < trucks.length; i++) {
      if (trucks[i] > 0) {
        trucks[i]--;
      }
    }
  }

  function courierDelivery(courier, deliveryTimes) {
    let operationTime = 0;
    let courierTrucks = Array.from(new Array(courier).fill(0));

    initLoadToTruck(courierTrucks, deliveryTimes);

    while (true) {
      oneTickTruck(courierTrucks);
      // console.log(courierTrucks, deliveryTimes);
      operationTime++;
      if (courierTrucks.every((truck) => truck === 0) && deliveryTimes.length === 0) {
        break;
      }
      if (courierTrucks.some((truck) => truck === 0) && deliveryTimes.length !== 0) {
        loadToTruck(courierTrucks, deliveryTimes);
      }
    }

    return operationTime;
  }
  const courier = 3;
  const deliveryTimes = [1, 2, 1, 3, 3, 3];

  console.log(courierDelivery(courier, deliveryTimes));
}
