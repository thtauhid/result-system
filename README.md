### Front End
Add Student		: http://localhost:3000/add/student
Add Result		: http://localhost:3000/add/result

Edit Student	:
Edit Result		:

View Result		: 

### Back End
Add Student		: http://localhost:5000/student/add		[API passed] 
`	[POST]
	{
		"roll": 121264,
		"reg": 14124565
	}
`
Add Result		: http://localhost:5000/result/add		[API passed]
`	[POST]
	{
		"roll": 121264,
		"reg": 14124565,
		"bengali": 50,
		"english": 60,
		"math": 70
	}
`
Student List	: http://localhost:5000/student/list	[API passed]
`	[GET]
`

View Result		: http://localhost:5000/result/view		[API passed]
`	[GET]
	{
		"roll": 121264,
		"reg": 14124565
	}
`

Edit Student	:
Edit Result		: 