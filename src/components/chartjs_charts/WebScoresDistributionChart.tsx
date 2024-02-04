import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import distribution from "../../data/url_scores_distributions.json";
import Chart, { ChartEvent, LegendElement, LegendItem } from "chart.js/auto";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const url_performance_score = distribution.map(
  (item) => item.url_performance_score * 100
);

const url_accessibility_score = distribution.map(
  (item) => item.url_accessibility_score * 100
);
const url_best_practices_score = distribution.map(
  (item) => item.url_best_practices_score * 100
);
const url_seo_score = distribution.map((item) => item.url_seo_score * 100);
const average_website_score = distribution.map(
  (item) => item.average_website_score * 100
);

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
  const performanceHistogram = getHistogram(url_performance_score);
  const accessibilityHistogram = getHistogram(url_accessibility_score);
  const bestPractisesHistogram = getHistogram(url_best_practices_score);
  const seoHistogram = getHistogram(url_seo_score);
  const AverageWebsiteScoreHistogram = getHistogram(average_website_score);

  const data = {
    labels: Array.from(Array(101).keys()),
    datasets: [
      {
        label: "Wydajność",
        data: performanceHistogram,
        fill: true,
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
      },
      {
        label: "Dostępność",
        data: accessibilityHistogram,
        fill: true,
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
      },
      {
        label: "Dobre praktyki",
        data: bestPractisesHistogram,
        fill: true,
        backgroundColor: "yellow",
        borderColor: "yellow",
        borderWidth: 1,
      },
      {
        label: "SEO",
        data: seoHistogram,
        fill: true,
        backgroundColor: "purple",
        borderColor: "purple",
        borderWidth: 1,
      },
      {
        label: "Średni wynik stron internetowych",
        data: AverageWebsiteScoreHistogram,
        fill: true,
        backgroundColor: "blue",
        borderColor: "blue",
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
        min: 21,
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
