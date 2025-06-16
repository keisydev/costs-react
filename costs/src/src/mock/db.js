// src/mock/db.js
export const categoriesData = [
  {
    "id": "1",
    "name": "Infra"
  },
  {
    "id": "2",
    "name": "Desenvolvimento"
  },
  {
    "id": "3",
    "name": "Design"
  },
  {
    "id": "4",
    "name": "Planejamento"
  }
];

export const projectsData = [

  {
    "id": 1,
    "name": "Desenvolvimento de Website",
    "budget": "5000",
    "category": { "id": "1", "name": "Desenvolvimento" },
    "cost": 0,
    "services": []
  },
  {
    "id": 2,
    "name": "Campanha de Marketing",
    "budget": "3000",
    "category": { "id": "2", "name": "Marketing" },
    "cost": 0,
    "services": []
  },
 {
  "projects": [
    {
      "id": "a97d",
      "name": "Cost",
      "budget": "5600",
      "category": {
        "id": "2",
        "name": "Desenvolvimento"
      },
      "cost": 1500,
      "services": [
        {
          "name": "Dev PHP",
          "cost": "500",
          "description": "Criar a função de enviar e-mails",
          "id": "7b155f41-e5c2-4398-ba39-f866b66039a9"
        },
        {
          "name": "Dev Front end",
          "cost": "1000",
          "description": "Estruturar página web",
          "id": "fadf1503-6919-4f0f-983c-b0a3264d18ee"
        }
      ]
    },
    {
      "id": "261c",
      "name": "local",
      "budget": "5000",
      "category": {
        "id": "4",
        "name": "Planejamento"
      },
      "cost": 0,
      "services": []
    },
    {
      "id": "25bc",
      "name": "location",
      "budget": "1000",
      "category": {
        "id": "3",
        "name": "Design"
      },
      "cost": 0,
      "services": []
    }
  ],
  "categories": [
    {
      "id": "1",
      "name": "Infra"
    },
    {
      "id": "2",
      "name": "Desenvolvimento"
    },
    {
      "id": "3",
      "name": "Design"
    },
    {
      "id": "4",
      "name": "Planejamento"
    }
  ]
}
]