import NextContest from './nextContest';
import Greeting from './Greeting';
import TaskSection from './TaskScheduleSection';
import CircularProgressBar from './CircularProgressBar';

// Dashboard.jsx
export default function Dashboard() {
    const total = 100;
    const completed = 100;
    const name = "Mainul"
    return (
        <div className="dashboardBody p4 ">
            <Greeting name={name} />
            <div className="twoSide flex flex-col sm:flex-row gap-2">

                <div className="Dashboard-left flex-1">
                    <TaskSection />
                    <CircularProgressBar total={total} completed={completed} />
                </div>

                <div className="Dashboard-right bg-[#fff] rounded-lg">
                    <NextContest />
                </div>
            </div>
        </div>
    );
}