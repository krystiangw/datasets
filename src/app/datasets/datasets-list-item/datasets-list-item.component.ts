import { DatasetWithOrders } from './../models/dataset.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datasets-list-item',
  templateUrl: './datasets-list-item.component.html',
  styleUrls: ['./datasets-list-item.component.scss']
})
export class DatasetsListItemComponent {
  @Input() item: DatasetWithOrders;
}
