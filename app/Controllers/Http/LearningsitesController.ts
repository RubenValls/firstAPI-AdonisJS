import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LearningsitesController {
  public async index(ctx: HttpContextContract) {
    return [
      {
        id: "OpenBootcamp",
        site: 'https://campus.open-bootcamp.com/',
        youCanLearn: ["Front-end", "Back-end", "Full-stack", "Mobile"]
      },
      {
        id: "HackerRank",
        site: 'https://www.hackerrank.com/',
        youCanLearn: ["Algorithms", "SQL", "Data Structures"]
      },
      {
        id: "freeCodeCamp",
        site: 'https://www.freecodecamp.org/learn/',
        youCanLearn: ["Responsive Web Design", "Front-end", "Back-end", "Data Analysis"]
      },
      {
        id: "OpenWebinars",
        site: 'https://openwebinars.net/academia/',
        youCanLearn: ["DevOps", "Front-end", "Back-end", "Big Data"]
      }
    ]
  }
}


