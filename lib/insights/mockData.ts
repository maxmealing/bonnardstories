import { faker } from "@faker-js/faker";
import { DataPoint } from "@/types/insights";

/**
 * Generate mock chart data with different trend patterns
 */
export function generateMockData(
  points: number,
  trend: "up" | "down" | "stable" | "volatile" = "up"
): DataPoint[] {
  faker.seed(Math.random() * 10000);
  const data: DataPoint[] = [];
  let baseValue = faker.number.int({ min: 20, max: 80 });

  const labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"];
  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const labelSet = points <= 5 ? monthLabels : points <= 7 ? dayLabels : labels;

  for (let i = 0; i < points; i++) {
    let value = baseValue;

    if (trend === "up") {
      value +=
        i * faker.number.int({ min: 2, max: 8 }) +
        faker.number.int({ min: -3, max: 3 });
    } else if (trend === "down") {
      value -=
        i * faker.number.int({ min: 2, max: 8 }) +
        faker.number.int({ min: -3, max: 3 });
    } else if (trend === "volatile") {
      value += faker.number.int({ min: -15, max: 15 });
    } else {
      value += faker.number.int({ min: -2, max: 2 });
    }

    data.push({
      day: labelSet[i] || `Point ${i + 1}`,
      value: Math.max(5, Math.min(100, value)),
    });

    baseValue = value;
  }

  return data;
}
