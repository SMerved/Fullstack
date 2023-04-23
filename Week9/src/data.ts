export const people = [
  {
    "id": '6',
    "name": "Finn2",
    "age": 45,
    "city": "Bagsværd",
    "addresses": [
      {
        "id": "1",
        "street": "Solvejen",
        "number": 27
      }
    ]
  },
  {
    "id": '7',
    "name": "Gustav",
    "age": 70,
    "city": "Frederikssund",
    "addresses": []
  },
  {
    "id": '8',
    "name": "Hans",
    "age": 80,
    "city": "Albertslund",
    "addresses": [
      {
        "id": "1",
        "street": "Solvejen",
        "number": 27
      },
      {
        "id": "3",
        "street": "Stjernevejen",
        "number": 123
      }
    ]
  },
  {
    "id": '9',
    "name": "Ib",
    "age": 90,
    "city": "Frederikssund",
    "addresses": []
  }
]
export const addresses = [
  {
    "id": "1",
    "street": "Solvejen",
    "number": 27,
    "people": [
      {
        "id": '6',
        "name": "Finn2",
        "age": 45,
        "city": "Bagsværd"
      },
      {
        "id": '8',
        "name": "Hans",
        "age": 80,
        "city": "Albertslund"
      }
    ]
  },
  {
    "id": "2",
    "street": "Månevejen",
    "number": 95,
    "people": [

    ]
  },
  {
    "id": "3",
    "street": "Stjernevejen",
    "number": 123,
    "people": [
      {
        "id": '8',
        "name": "Hans",
        "age": 80,
        "city": "Albertslund"
      }
    ]
  }
]
