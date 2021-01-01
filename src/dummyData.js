const dummyData = {
  'teacherName': 'Gordon Gest',
  'studios': [
    {
      'studioName': 'HEHS'
    },
    {
      'studioName': 'Music Institute of Chicago'
    },
    {
      'studioName': 'North Central College'
    },
    {
      'studioName': 'DePaul CMD',
      'location': 'Chicago, IL',
      'size': 3,
      'days': [
        'Sunday'
      ],
      'students': [
        {
          'name': 'Cora Nadal',
          'age': 17,
          'level': 'lower intermediate',
          'assignments': [
            {
              "name":"illum-aliquid-voluptatem",
              "tempo":141,
              "dueDate": '2021-03-06T02:57:11.119Z',
              "completed":true,
              "notes":"Rerum ut vel inventore ducimus magnam debitis voluptas."
            },
            {
              "name":"cum-debitis-dolores",
              "tempo":76,
              "dueDate":"2021-08-18T06:36:27.657Z",
              "completed":true,
              "notes":"Facere ullam quis ut illo harum sint laborum."
            }
          ],
          'goals': [
            {
              'title': 'sound production',
              'body': 'more efficiency and clearer tone; get more sound for less air'
            }
          ],
          'instructorNotes': [
            {
              'body': 'good work ethic, consistent practicer, needs clarity in direction and reminders'
            }
          ]
        },
        {
          'name': 'Alex Cutler',
          'age': 16,
          'level': 'beginner',
          'assignments': [
            {
              "name":"modi-et-consequatur",
              "tempo":128,
              "dueDate":"2021-08-04T10:45:06.837Z",
              "completed":false,
              "notes":"Repellendus reprehenderit minima voluptas nam dolor quo rerum."
            },
            {
              "name":"nihil-laboriosam-minus",
              "tempo":84,
              "dueDate":"2021-10-28T12:50:04.700Z",
              "completed":false,
              "notes":"At non quos facere sed cupiditate ea esse tempore neque."
            }
          ],
          'goals': [
            {
              'title': 'technique',
              'body': 'complete Level I of technique workbook'
            }
          ],
          'instructorNotes': [
            {
              'body': 'needs particular attention to scale technique.'
            }
          ]
        },
        {
          'name': 'Rob Coleman',
          'age': 52,
          'level': 'upper intermediate',
          'assignments': [
            {
              "name":"cum-debitis-dolores",
              "tempo":96,
              "dueDate":"2021-08-18T06:36:27.657Z","completed":true,
              "notes":"Facere ullam quis ut illo harum sint laborum."
            },
            {
              "name":"modi-et-consequatur",
              "tempo":112,
              "dueDate":"2021-08-04T10:45:06.837Z",
              "completed":false,
              "notes":"Repellendus reprehenderit minima voluptas nam dolor quo rerum."
            }
          ],
          'goals': [
            {
              'title': 'improvisation',
              'body': 'memorize ii-V7-I patterns in common keys'
            }
          ],
          'instructorNotes': [
            {
              'body': 'good technique but limited vocabulary and theory'
            }
          ]
        }
      ]
    }
  ]
}

module.exports = { dummyData };