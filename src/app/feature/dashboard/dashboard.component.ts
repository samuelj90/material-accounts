import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pms-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = [
    { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
    { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
    { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
    { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
    { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  ];
  constructor() {}

  ngOnInit() {}
}
