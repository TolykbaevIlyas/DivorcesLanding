const ctx = document.getElementById("divorceChart").getContext("2d");
const divorceChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2017", "2019", "2021", "2023"],
    datasets: [
      {
        label: "Общее количество разводов",
        data: [45000, 48000, 47000, 50000], // Примерные данные, заменить на реальные
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
