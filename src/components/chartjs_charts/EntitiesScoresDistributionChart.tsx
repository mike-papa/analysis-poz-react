import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import distribution from "../../data/score_distribution.json";
import Chart, { ChartEvent, LegendElement, LegendItem } from "chart.js/auto";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const entities_scores = distribution.map((item) => item);
const DataDistributionChart = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Histogram creation - calculating the distribution
  const getHistogram = (data: number[]) => {
    const histogramData = Array<number>(100).fill(0);
    data.forEach((value) => {
      const bin = Math.floor(value);
      if (histogramData[bin]) {
        histogramData[bin] += 1;
      } else {
        histogramData[bin] = 1;
      }
    });
    return histogramData;
  };

  // Converting histogram data into an array for a chart
  const entitiesScoresHistogram = getHistogram(entities_scores);

  const data = {
    labels: Array.from(Array(101).keys()),
    datasets: [
      {
        label: "Oceny wszystkich obiektów",
        data: entitiesScoresHistogram,
        fill: true,
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
      },
    ],
  };

  // Function to calculate the minimum value of visible datasets
  const calculateMinLabelValue = (chart: Chart<"bar">) => {
    let minLabelValue = 100;

    chart.data.datasets.forEach((dataset, index: number) => {
      if (chart.isDatasetVisible(index)) {
        const nonZeroValue = dataset.data.find((x) => x !== 0);

        if (nonZeroValue !== undefined) {
          const nonZeroIndex = dataset.data.indexOf(nonZeroValue);
          if (nonZeroIndex !== -1 && nonZeroIndex < minLabelValue) {
            minLabelValue = nonZeroIndex;
          }
        }
      }
    });
    return minLabelValue;
  };
  const onClick = (
    e: ChartEvent,
    legendItem: LegendItem,
    legend: LegendElement<"bar">
  ) => {
    e = e;
    const index = legendItem.datasetIndex;
    const ci = legend.chart;
    if (typeof index !== "number") {
      console.error("Dataset index is undefined");
      return;
    }
    if (ci.isDatasetVisible(index)) {
      ci.hide(index);
      legendItem.hidden = true;
    } else {
      ci.show(index);
      legendItem.hidden = false;
    }
    // Recalculate and update the minimum label value for x-axis
    const minLabelValue = calculateMinLabelValue(ci);

    if (ci.options && ci.options.scales && ci.options.scales.x) {
      ci.options.scales.x.min = minLabelValue;
    } else {
      console.error("Chart scales configuration is undefined");
    }

    ci.update();
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom" as "top" | "left" | "right" | "bottom" | "center",
        labels: {
          color: `${isDarkMode ? "white" : "black"}`,
          font: {
            size: 14,
          },
          padding: 20,
        },
        onClick: (
          e: ChartEvent,
          legendItem: LegendItem,
          legend: LegendElement<"bar">
        ) => {
          onClick(e, legendItem, legend);
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 2,
      },
      x: {
        min: 75,
        max: 100,
        stepSize: 1,
      },
    },

    elements: {
      line: {
        tension: 0.6,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="min-h-[600px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default DataDistributionChart;
