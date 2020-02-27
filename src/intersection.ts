export {}

type Picher1 = {
  throwingSpeed: number
}

type Batter1 = {
  battingAverage: number
}

const Daimaou: Picher1 = {
  throwingSpeed: 154
}

const Ochiai: Batter1 = {
  battingAverage: 0.367
}

type TwoWayPlayer = Picher1 & Batter1

const Tsuneta: TwoWayPlayer = {
  throwingSpeed: 154,
  battingAverage: 0.367
}
