import { Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Content {
  name: string;
  date: string;
  title: string;
  content?: string;
  subContents?: Array<SubContent>;
  img?: string;
}
interface SubContent {
  title?: string;
  terms?: Array<TermsContent>;
  content?: string;
  img?: String;
}
interface TermsContent {
  title: string;
  content?: string;
  subTerms?: any;

  image?: string;
}
@Component({
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsComponent {
  id: string | null = 'news';
  contents: Array<Content> = [
    {
      name: '1',
      date: '25/12/2023',
      title: 'NEWS.NEWS1.TITLE',
      content: 'NEWS.NEWS1.CONTENT',
      subContents: [
        {
          title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT1.TITLE',
          content: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT1.CONTENT',
        },
        {
          title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT2.TITLE',
          content: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT2.CONTENT',
          terms: [
            {
              title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT2.terms1',
            },
            {
              title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT2.terms2',
            },
            {
              title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT2.terms3',
            },
            {
              title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT2.terms4',
            },
          ],
        },
        {
          title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT3.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT3.terms1',
            },
            {
              title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT3.terms2',
            },
          ],
        },
        {
          title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT4.TITLE',
          content: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT4.CONTENT',
          terms: [
            {
              title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT4.terms1',
              content: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT4.terms1_content',
            },
            {
              title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT4.terms2',
              content: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT4.terms2_content',
            },
            {
              title: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT4.terms3',
              content: 'NEWS.NEWS1.SUBCONTENT.SUBCONTENT4.terms3_content',
            },
          ],
        },
      ],
    },
    {
      name: '2',
      date: '22/05/2024',
      title: 'NEWS.NEWS2.TITLE',
      content: 'NEWS.NEWS2.CONTENT',
      subContents: [
        {
          title: 'NEWS.NEWS2.SUBCONTENT.SUBCONTENT1.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS2.SUBCONTENT.SUBCONTENT1.terms1',
            },
            {
              title: 'NEWS.NEWS2.SUBCONTENT.SUBCONTENT1.terms2',
            },
            {
              title: 'NEWS.NEWS2.SUBCONTENT.SUBCONTENT1.terms3',
            },
            {
              title: 'NEWS.NEWS2.SUBCONTENT.SUBCONTENT1.terms4',
            },
          ],
        },
        {
          title: 'NEWS.NEWS2.SUBCONTENT.SUBCONTENT2.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS2.SUBCONTENT.SUBCONTENT2.terms1',
            },
            {
              title: 'NEWS.NEWS2.SUBCONTENT.SUBCONTENT2.terms2',
            },
            {
              title: 'NEWS.NEWS2.SUBCONTENT.SUBCONTENT2.terms3',
            },
            {
              title: 'NEWS.NEWS2.SUBCONTENT.SUBCONTENT2.terms4',
            },
          ],
        },
      ],
    },
    {
      name: '3',
      date: '05/06/2024',
      title: 'NEWS.NEWS3.TITLE',
      content: 'NEWS.NEWS3.CONTENT',
      img: 'assets/image/news/news3.jpg',
    },
    {
      name: '4',
      date: '28/07/2024',
      title: 'NEWS.NEWS4.TITLE1',
      subContents: [
        {
          title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT1.TITLE',
          // content: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT1.CONTENT',
        },
        {
          title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT2.TITLE',
          // content: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT2.CONTENT',
        },
        {
          title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT3.TITLE',
          // content: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT3.CONTENT',
        },
        {
          title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT4.TITLE',
          // content: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT4.CONTENT',
        },
        {
          title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT5.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT5.terms1',
              image: 'assets/image/news/new4Pic.png',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT5.terms2',
            },
          ],
        },
        {
          title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT6.TITLE',
          // content: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT6.CONTENT',
        },
        {
          title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT7.TITLE',
          content: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT7.CONTENT',
          terms: [
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT7.terms1',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT7.terms2',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT7.terms3',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT7.terms4',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT7.terms5',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT7.terms6',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT7.terms7',
            },
          ],
        },
        {
          title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT8.TITLE',
          content: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT8.CONTENT',
        },
        {
          title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT9.TITLE',
          // content: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT9.CONTENT',
        },
        {
          title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms1.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms1.terms1',
                },
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms1.terms2',
                },
                {
                  title:
                    'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms1.terms3.TITLE',
                  subSubTerms: [
                    {
                      title:
                        'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms1.terms3.TERMS1',
                    },
                    {
                      title:
                        'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms1.terms3.TERMS2',
                    },
                    {
                      title:
                        'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms1.terms3.TERMS3',
                    },
                  ],
                },
              ],
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms2.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms2.terms1',
                },
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms2.terms2',
                },
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms2.terms3',
                },
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms2.terms4',
                },
              ],
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms3.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms3.terms1',
                },
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms3.terms2',
                },
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms3.terms3',
                },
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms3.terms4',
                },
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms3.terms5',
                },
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms3.terms6',
                },
                {
                  title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT10.terms3.terms7',
                },
              ],
            },
          ],
        },
        {
          title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT11.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT11.terms1',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT11.terms2',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT11.terms3',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT11.terms4',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT11.terms5',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT11.terms6',
            },
            {
              title: 'NEWS.NEWS4.SUBCONTENT.SUBCONTENT11.terms7',
            },
          ],
        },
      ],
    },
    {
      name: '5',
      date: '28/08/2024',
      title: 'NEWS.NEWS5.TITLE',
      subContents: [
        {
          terms: [
            {
              title: 'NEWS.NEWS5.SUBCONTENT.SUBCONTENT1.terms1',
            },
            {
              title: 'NEWS.NEWS5.SUBCONTENT.SUBCONTENT1.terms2',
            },
            {
              title: 'NEWS.NEWS5.SUBCONTENT.SUBCONTENT1.terms3',
            },
            {
              title: 'NEWS.NEWS5.SUBCONTENT.SUBCONTENT1.terms4',
            },
          ],
        },
        {
          content: 'NEWS.NEWS5.SUBCONTENT.SUBCONTENT2.content',
        },
      ],
    },
    {
      name: '6',
      date: '03/10/2024',
      title: 'NEWS.NEWS6.TITLE1',
      subContents: [
        {
          title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT1.TITLE',
        },
        {
          title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT2.TITLE',
        },
        {
          title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT3.TITLE',
        },
        {
          title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT4.TITLE',
        },
        {
          title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT5.TITLE',
          content: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT5.CONTENT',
        },
        {
          title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT6.TITLE',
          content: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT6.CONTENT',
        },
        {
          title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT7.TITLE',
          content: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT7.CONTENT',
          terms: [
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT7.terms1',
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT7.terms2',
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT7.terms3',
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT7.terms4',
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT7.terms5',
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT7.terms6',
            },
          ],
        },
        {
          title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT8.TITLE',
          content: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT8.CONTENT',
        },
        {
          title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms1.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms1.terms1',
                },
                {
                  title:
                    'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms1.terms2.TITLE',
                  subSubTerms: [
                    {
                      title:
                        'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms1.terms2.TERMS1',
                    },
                    {
                      title:
                        'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms1.terms2.TERMS2',
                    },
                    {
                      title:
                        'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms1.terms2.TERMS3',
                    },
                    {
                      title:
                        'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms1.terms2.TERMS4',
                    },
                    {
                      title:
                        'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms1.terms2.TERMS5',
                    },
                    {
                      title:
                        'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms1.terms2.TERMS6',
                    },
                  ],
                },
              ],
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms2.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms2.terms1',
                },
                {
                  title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms2.terms2',
                },
                {
                  title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT9.terms2.terms3',
                },
              ],
            },
          ],
        },
        {
          title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT10.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT10.terms1',
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT10.terms2',
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT10.terms3',
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT10.terms4',
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT10.terms5',
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT10.terms6',
            },
            {
              title: 'NEWS.NEWS6.SUBCONTENT.SUBCONTENT10.terms7',
            },
          ],
        },
      ],
    },
    {
      name: '7',
      date: '03/10/2024',
      title: 'NEWS.NEWS7.TITLE1',
      subContents: [
        {
          title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT1.TITLE',
        },
        {
          title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT2.TITLE',
        },
        {
          title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT3.TITLE',
        },
        {
          title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT4.TITLE',
        },
        {
          title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT5.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT5.terms1',
            },
          ],
        },
        {
          title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT6.TITLE',
        },
        {
          title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT7.TITLE',
          content: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT7.CONTENT',
          terms: [
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT7.terms1',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT7.terms2',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT7.terms3',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT7.terms4',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT7.terms5',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT7.terms6',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT7.terms7',
            },
          ],
        },
        {
          title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT8.TITLE',
          content: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT8.CONTENT',
        },
        {
          title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT9.TITLE',
        },
        {
          title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms1.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms1.terms1',
                },
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms1.terms2',
                },
                {
                  title:
                    'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms1.terms3.TITLE',
                  subSubTerms: [
                    {
                      title:
                        'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms1.terms3.TERMS1',
                    },
                    {
                      title:
                        'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms1.terms3.TERMS2',
                    },
                    {
                      title:
                        'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms1.terms3.TERMS3',
                    },
                  ],
                },
              ],
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms2.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms2.terms1',
                },
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms2.terms2',
                },
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms2.terms3',
                },
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms2.terms4',
                },
              ],
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms3.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms3.terms1',
                },
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms3.terms2',
                },
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms3.terms3',
                },
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms3.terms4',
                },
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms3.terms5',
                },
                {
                  title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT10.terms3.terms6',
                },
              ],
            },
          ],
        },
        {
          title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT11.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT11.terms1',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT11.terms2',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT11.terms3',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT11.terms4',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT11.terms5',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT11.terms6',
            },
            {
              title: 'NEWS.NEWS7.SUBCONTENT.SUBCONTENT11.terms7',
            },
          ],
        },
      ],
    },
    {
      name: '8',
      date: '22/11/2024',
      title: 'NEWS.NEWS8.TITLE1',
      subContents: [
        {
          title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT1.TITLE',
        },
        {
          title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT2.TITLE',
        },
        {
          title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT3.TITLE',
        },
        {
          title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT4.TITLE',
        },
        {
          title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT5.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT5.terms1',
            },
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT5.terms2',
            },
          ],
        },
        {
          title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT6.TITLE',
        },
        {
          title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT7.TITLE',
        },
        {
          title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT8.TITLE',
          content: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT8.CONTENT',
        },
        {
          title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT9.TITLE',
        },
        {
          title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms1.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms1.terms1',
                },
                {
                  title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms1.terms2',
                },
                {
                  title:
                    'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms1.terms3.TITLE',
                  subSubTerms: [
                    {
                      title:
                        'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms1.terms3.TERMS1',
                    },
                    {
                      title:
                        'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms1.terms3.TERMS2',
                    },
                    {
                      title:
                        'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms1.terms3.TERMS3',
                    },
                  ],
                },
              ],
            },
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms2.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms2.terms1',
                },
                {
                  title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms2.terms2',
                },
                {
                  title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms2.terms3',
                },
                {
                  title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms2.terms4',
                },
              ],
            },
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms3.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms3.terms1',
                },
                {
                  title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms3.terms2',
                },
                {
                  title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms3.terms3',
                },
                {
                  title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT10.terms3.terms4',
                },
              ],
            },
          ],
        },
        {
          title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT11.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT11.terms1',
            },
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT11.terms2',
            },
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT11.terms3',
            },
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT11.terms4',
            },
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT11.terms5',
            },
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT11.terms6',
            },
            {
              title: 'NEWS.NEWS8.SUBCONTENT.SUBCONTENT11.terms7',
            },
          ],
        },
      ],
    },
    {
      name: '9',
      date: '10/12/2024',
      title: 'NEWS.NEWS9.TITLE1',
      subContents: [
        {
          title: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT1.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT1.CONTENT'
        },
        {
          title: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT2.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT2.CONTENT',
          img: 'assets/image/news/news9.png',
        },
        {
          title: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT3.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT3.CONTENT'
        },
        {
          title: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT4.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT4.CONTENT'
        },
        {
          title: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT5.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT5.CONTENT'
          terms: [
            {
              title: '',
              image: 'assets/image/qr_code_241107.png'
            },
          ],
        },
        {
          title: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT6.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT6.CONTENT'
        },
        {
          title: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.CONTENT'
        },
      ],
    },
    {
      name: '10',
      date: '12/12/2024',
      title: 'NEWS.NEWS10.TITLE1',
      subContents: [
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT1.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT1.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT2.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT2.CONTENT',
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT3.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT3.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT4.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT4.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT5.TITLE',
          content: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT5.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT6.TITLE',
          content: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT6.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT7.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT8.TITLE',
          terms: [
            {
              title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT8.terms1.TITLE',
            },
            {
              title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT8.terms2.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT8.terms2.terms1',
                },
                {
                  title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT8.terms2.terms2',
                }
              ],
            },
            {
              title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT8.terms3.TITLE',
              subTerms: [
                {
                  title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT8.terms3.terms1',
                },
                {
                  title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT8.terms3.terms2',
                },
                {
                  title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT8.terms3.terms3',
                },
              ],
            },
          ],
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT9.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT10.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT11.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT12.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT13.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT14.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT15.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT16.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.CONTENT'
        },
        {
          title: 'NEWS.NEWS10.SUBCONTENT.SUBCONTENT17.TITLE',
          // content: 'NEWS.NEWS9.SUBCONTENT.SUBCONTENT7.CONTENT'
        },
      ],
    },
  ];
  currentContent!: Content;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('name');
    this.currentContent = this.contents.find(
      (item) => item.name === this.id
    ) || {
      name: '',
      date: '',
      title: '',
      content: '',
      subContents: [],
    };
  }

  formatDate(input: string = '', isDay = false) {
    const months = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    const [day, month, year] = input.split('/');
    return !isDay ? months[parseInt(month, 10) - 1] : day;
  }

  goBack(): void {
    this.location.back();
  }
}
