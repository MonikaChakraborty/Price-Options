import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {

    
        const marks = [
          {
            "name": "John",
            "math_marks": 85,
            "physics_marks": 78,
            "chemistry_marks": 92
          },
          {
            "student_id": 2,
            "name": "Emily",
            "math_marks": 78,
            "physics_marks": 85,"chemistry_marks": 89
          },
          {
            "student_id": 3,
            "name": "Michael",
            "math_marks": 92,
            "physics_marks": 72,"chemistry_marks": 81
          },
          {
            "student_id": 4,
            "name": "Sophia",
            "math_marks": 88,
            "physics_marks": 82,
            "chemistry_marks": 91
          },
          {
            "student_id": 5,
            "name": "William",
            "math_marks": 76,
            "physics_marks": 70,
            "chemistry_marks": 84
          },
          {
            "student_id": 6,
            "name": "Olivia",
            "math_marks": 94,
            "physics_marks": 89,
            "chemistry_marks": 94
          },
          {
            "student_id": 7,
            "name": "James",
            "math_marks": 90,
            "physics_marks": 75,
            "chemistry_marks": 88
          },
          {
            "student_id": 8,
            "name": "Emma",
            "math_marks": 82,
            "physics_marks": 88,
            "chemistry_marks": 93
          },
          {
            "student_id": 9,
            "name": "Daniel",
            "math_marks": 87,
            "physics_marks": 71,
            "chemistry_marks": 86
          },
          {
            "student_id": 10,
            "name": "Ava",
            "math_marks": 79,
            "physics_marks": 80,
            "chemistry_marks": 90
          }
        ]
      
      

    return (
        <div>
            <LChart width={800} height={400} data={marks}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="math_marks"></Line>
                <Line dataKey="physics_marks" stroke='red'></Line>
                <Line dataKey="chemistry_marks" stroke='orange'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;