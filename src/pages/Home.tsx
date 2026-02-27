import "./Home.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Home() {
  const revenueData = {
    labels: [
      "Th1", "Th2", "Th3", "Th4", "Th5", "Th6",
      "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"
    ],
    datasets: [
      {
        label: "Doanh thu (triệu VNĐ)",
        data: [12, 19, 15, 22, 30, 28, 35, 40, 38, 45, 50, 60],
        backgroundColor: "rgba(99,102,241,0.6)"
      }
    ]
  };

  const successRate = {
    labels: ["Thành công", "Thất bại"],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ["#10b981", "#ef4444"]
      }
    ]
  };

  return (
    <div className="home-container">
      <h1>Dashboard Thống Kê</h1>

      <div className="stats">
        <div className="card">
          <h3>Đơn hàng</h3>
          <p>1,245</p>
        </div>

        <div className="card">
          <h3>Doanh thu</h3>
          <p>350 triệu</p>
        </div>

        <div className="card">
          <h3>Tỷ lệ thành công</h3>
          <p>85%</p>
        </div>
      </div>

      <div className="charts">
        <div className="chart-box">
          <h3>Doanh thu theo tháng</h3>
          <Bar data={revenueData} />
        </div>

        <div className="chart-box">
          <h3>Tỷ lệ đơn hàng</h3>
          <Doughnut data={successRate} />
        </div>
      </div>
    </div>
  );
}