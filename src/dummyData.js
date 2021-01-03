const dummyData = {
  'teacherName': 'Gordon Gest',
  'studios': [
    {
      'studioName': 'HEHS',
      'id': 1,
      'location': 'Hoffman Estates, IL',
      'size': 3,
      'days': 'Thursday',
      'students': [
        {
          'name': 'Steph Meyer',
          'age': 16,
          'level': 'Lower Intermediate',
          'assignments': [
            {
              "title":"illum-aliquid-voluptatem",
              "tempo":141,
              "dueDate": '01/17/21',
              "completed":true,
              "notes":"Rerum ut vel inventore ducimus magnam debitis voluptas."
            },
            {
              "title":"cum-debitis-dolores",
              "tempo":76,
              "dueDate":"01/31/21",
              "completed":true,
              "notes":"Facere ullam quis ut illo harum sint laborum."
            }
          ],
          'goals': [
            {
              'title': 'Sound production',
              'body': 'More efficiency and clearer tone; get more sound for less air'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Good work ethic, consistent practicer, needs clarity in direction and reminders'
            }
          ]
        },
        {
          'name': 'James Roberts',
          'age': 17,
          'level': 'Beginner',
          'assignments': [
            {
              "title":"modi-et-consequatur",
              "tempo":128,
              "dueDate":"01/10/21",
              "completed":false,
              "notes":"Repellendus reprehenderit minima voluptas nam dolor quo rerum."
            },
            {
              "title":"nihil-laboriosam-minus",
              "tempo":84,
              "dueDate":"02/13/21",
              "completed":false,
              "notes":"At non quos facere sed cupiditate ea esse tempore neque."
            }
          ],
          'goals': [
            {
              'title': 'Technique',
              'body': 'Complete Level I of technique workbook'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Needs particular attention to scale technique.'
            }
          ]
        },
        {
          'name': 'Zach Harmon',
          'age': 14,
          'level': 'Upper Intermediate',
          'assignments': [
            {
              "title":"cum-debitis-dolores",
              "tempo":96,
              "dueDate":"02/20/21",
              "completed":true,
              "notes":"Facere ullam quis ut illo harum sint laborum."
            },
            {
              "title":"modi-et-consequatur",
              "tempo":112,
              "dueDate":"01/10/21",
              "completed":false,
              "notes":"Repellendus reprehenderit minima voluptas nam dolor quo rerum."
            }
          ],
          'goals': [
            {
              'title': 'Improvisation',
              'body': 'Memorize ii-V7-I patterns in common keys'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Good technique but limited vocabulary and theory'
            }
          ]
        }
      ]
    },
    {
      'studioName': 'Music Institute of Chicago',
      'id': 2,
      'location': 'Evanston, IL',
      'size': 4,
      'days': 'Friday',
      'students': [
        {
          'name': 'Trevor Wilson',
          'age': 15,
          'level': 'Upper Intermediate',
          'assignments': [
            {
              "title":"illum-aliquid-voluptatem",
              "tempo":141,
              "dueDate": '01/07/21',
              "completed":true,
              "notes":"Rerum ut vel inventore ducimus magnam debitis voluptas."
            },
            {
              "title":"cum-debitis-dolores",
              "tempo":76,
              "dueDate":"01/21/21",
              "completed":true,
              "notes":"Facere ullam quis ut illo harum sint laborum."
            }
          ],
          'goals': [
            {
              'title': 'Sound production',
              'body': 'More efficiency and clearer tone; get more sound for less air'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Good work ethic, consistent practicer, needs clarity in direction and reminders'
            }
          ]
        },
        {
          'name': 'Ian Marks',
          'age': 16,
          'level': 'Advanced',
          'assignments': [
            {
              "title":"modi-et-consequatur",
              "tempo":128,
              "dueDate":"01/14/21",
              "completed":false,
              "notes":"Repellendus reprehenderit minima voluptas nam dolor quo rerum."
            },
            {
              "title":"nihil-laboriosam-minus",
              "tempo":84,
              "dueDate":"01/28/21",
              "completed":false,
              "notes":"At non quos facere sed cupiditate ea esse tempore neque."
            }
          ],
          'goals': [
            {
              'title': 'Technique',
              'body': 'Complete Level I of technique workbook'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Needs particular attention to scale technique.'
            }
          ]
        },
        {
          'name': 'Kylie Warner',
          'age': 16,
          'level': 'Upper Intermediate',
          'assignments': [
            {
              "title":"cum-debitis-dolores",
              "tempo":96,
              "dueDate":"01/05/21","completed":true,
              "notes":"Facere ullam quis ut illo harum sint laborum."
            },
            {
              "title":"modi-et-consequatur",
              "tempo":112,
              "dueDate":"01/19/21",
              "completed":false,
              "notes":"Repellendus reprehenderit minima voluptas nam dolor quo rerum."
            }
          ],
          'goals': [
            {
              'title': 'Improvisation',
              'body': 'Memorize ii-V7-I patterns in common keys'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Good technique but limited vocabulary and theory'
            }
          ]
        },
        {
          'name': 'Ellie Jonsson',
          'age': 18,
          'level': 'Advanced',
          'assignments': [
            {
              "title":"modi-et-consequatur",
              "tempo":128,
              "dueDate":"01/31/21",
              "completed":false,
              "notes":"Repellendus reprehenderit minima voluptas nam dolor quo rerum."
            },
            {
              "title":"nihil-laboriosam-minus",
              "tempo":84,
              "dueDate":"02/06/21",
              "completed":false,
              "notes":"At non quos facere sed cupiditate ea esse tempore neque."
            }
          ],
          'goals': [
            {
              'title': 'Technique',
              'body': 'Complete Level I of technique workbook'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Needs particular attention to scale technique.'
            }
          ]
        }
      ]
    },
    {
      'studioName': 'North Central College',
      'id': 3,
      'location': 'Naperville, IL',
      'size': 2,
      'days': 'Tuesday',
      'students': [
        {
          'name': 'Lisa Archer',
          'age': 21,
          'level': 'Advanced',
          'assignments': [
            {
              "title":"illum-aliquid-voluptatem",
              "tempo":141,
              "dueDate": '01/16/21',
              "completed":true,
              "notes":"Rerum ut vel inventore ducimus magnam debitis voluptas."
            },
            {
              "title":"cum-debitis-dolores",
              "tempo":76,
              "dueDate":"01/30/21",
              "completed":true,
              "notes":"Facere ullam quis ut illo harum sint laborum."
            }
          ],
          'goals': [
            {
              'title': 'Sound production',
              'body': 'More efficiency and clearer tone; get more sound for less air'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Good work ethic, consistent practicer, needs clarity in direction and reminders'
            }
          ]
        },
        {
          'name': 'Mark Rogers',
          'age': 19,
          'level': 'Upper Intermediate',
          'assignments': [
            {
              "title":"modi-et-consequatur",
              "tempo":128,
              "dueDate":"01/09/21",
              "completed":false,
              "notes":"Repellendus reprehenderit minima voluptas nam dolor quo rerum."
            },
            {
              "title":"nihil-laboriosam-minus",
              "tempo":84,
              "dueDate":"01/16/21",
              "completed":false,
              "notes":"At non quos facere sed cupiditate ea esse tempore neque."
            }
          ],
          'goals': [
            {
              'title': 'Technique',
              'body': 'Complete Level I of technique workbook'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Needs particular attention to scale technique.'
            }
          ]
        }
      ]
    },
    {
      'studioName': 'DePaul CMD',
      'id': 4,
      'location': 'Chicago, IL',
      'size': 3,
      'days': [
        'Sunday'
      ],
      'students': [
        {
          'name': 'Cora Nadal',
          'age': 17,
          'level': 'Lower Intermediate',
          'assignments': [
            {
              "title":"illum-aliquid-voluptatem",
              "tempo":141,
              "dueDate": '01/08/21',
              "completed":true,
              "notes":"Rerum ut vel inventore ducimus magnam debitis voluptas."
            },
            {
              "title":"cum-debitis-dolores",
              "tempo":76,
              "dueDate":"01/22/21",
              "completed":true,
              "notes":"Facere ullam quis ut illo harum sint laborum."
            }
          ],
          'goals': [
            {
              'title': 'Sound production',
              'body': 'More efficiency and clearer tone; get more sound for less air'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Good work ethic, consistent practicer, needs clarity in direction and reminders'
            }
          ]
        },
        {
          'name': 'Alex Cutler',
          'age': 16,
          'level': 'Beginner',
          'assignments': [
            {
              "title":"modi-et-consequatur",
              "tempo":128,
              "dueDate":"01/15/21",
              "completed":false,
              "notes":"Repellendus reprehenderit minima voluptas nam dolor quo rerum."
            },
            {
              "title":"nihil-laboriosam-minus",
              "tempo":84,
              "dueDate":"01/29/21",
              "completed":false,
              "notes":"At non quos facere sed cupiditate ea esse tempore neque."
            }
          ],
          'goals': [
            {
              'title': 'Technique',
              'body': 'Complete Level I of technique workbook'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Needs particular attention to scale technique.'
            }
          ]
        },
        {
          'name': 'Rob Coleman',
          'age': 52,
          'level': 'Upper Intermediate',
          'assignments': [
            {
              "title":"cum-debitis-dolores",
              "tempo":96,
              "dueDate":"01/08/21",
              "completed":true,
              "notes":"Facere ullam quis ut illo harum sint laborum."
            },
            {
              "title":"modi-et-consequatur",
              "tempo":112,
              "dueDate":"01/29/21",
              "completed":false,
              "notes":"Repellendus reprehenderit minima voluptas nam dolor quo rerum."
            }
          ],
          'goals': [
            {
              'title': 'Improvisation',
              'body': 'Memorize ii-V7-I patterns in common keys'
            }
          ],
          'instructorNotes': [
            {
              'body': 'Good technique but limited vocabulary and theory'
            }
          ]
        }
      ]
    }
  ]
}

module.exports = dummyData;