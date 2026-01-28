import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PatientList from "../PatientList";
import type { Patient } from "../../types/patient";

const mockPatients: Patient[] = [
  { id: "1", firstName: "John", lastName: "Doe", dob: "1990-05-15" },
  { id: "2", firstName: "Jane", lastName: "Smith", dob: "1985-12-25" },
  { id: "3", firstName: "Bob", lastName: "Johnson", dob: "1978-03-10" },
];

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("PatientList", () => {
  it("renders a list of patients", () => {
    renderWithRouter(<PatientList patients={mockPatients} />);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  it("renders correct number of patient cards", () => {
    renderWithRouter(<PatientList patients={mockPatients} />);

    const detailsLinks = screen.getAllByRole("link", {
      name: /patient details/i,
    });
    expect(detailsLinks).toHaveLength(3);
  });

  it("renders empty list when no patients provided", () => {
    renderWithRouter(<PatientList patients={[]} />);

    const detailsLinks = screen.queryAllByRole("link", {
      name: /patient details/i,
    });
    expect(detailsLinks).toHaveLength(0);
  });

  it("renders all patient last names", () => {
    renderWithRouter(<PatientList patients={mockPatients} />);

    expect(screen.getByText("Doe")).toBeInTheDocument();
    expect(screen.getByText("Smith")).toBeInTheDocument();
    expect(screen.getByText("Johnson")).toBeInTheDocument();
  });

  it("renders links with correct hrefs for each patient", () => {
    renderWithRouter(<PatientList patients={mockPatients} />);

    const links = screen.getAllByRole("link", { name: /patient details/i });
    expect(links[0]).toHaveAttribute("href", "/patients/1");
    expect(links[1]).toHaveAttribute("href", "/patients/2");
    expect(links[2]).toHaveAttribute("href", "/patients/3");
  });
});
