import { TemplateRef } from "@angular/core";

export interface Tabs{
  label:string,
  content:any[],
  image_en:{
    img_pc:string,
    img_tablet:string,
    img_mobile:string
  },
  image_vi:{
    img_pc:string,
    img_tablet:string,
    img_mobile:string
  },
};
export interface ItemTab {
  id:number,
  question: string;
  answer: string;
  customizedAnswer?: null | TemplateRef<any>;
}
