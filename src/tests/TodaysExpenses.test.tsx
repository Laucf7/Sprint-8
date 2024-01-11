import { render } from "@testing-library/react"
import TodaysExpenses from "../components/TodaysExpenses"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the TotalWeekExpenses component", () => {
    render(<TodaysExpenses />)
    expect(true).toBeTruthy()
})