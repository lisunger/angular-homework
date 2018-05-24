import { BlogPost, BlogPostStatus } from './blog-post';

export const POSTS: BlogPost[] = [
  new BlogPost(1, new Date(2017, 3, 16), 'Hello world', 'John Doe',
    'Contents are shown here!!', ['john', 'doe'], undefined, BlogPostStatus.INACTIVE),
  new BlogPost(2, new Date(1987, 4, 8), 'Title1', 'Lili',
    'Contents are shown here!!', ['123', 'dfsg']),
  new BlogPost(3, new Date(2005, 5, 13), 'Eldorado', 'Jeff Lynne',
    'Contents are shown here!!', ['gsbsrt', 'kanestrhsv'], undefined, BlogPostStatus.INACTIVE),
  new BlogPost(4, new Date(1994, 12, 4), 'Important date', 'Niki',
    'Contents are shown here!!', ['niki', 'kanev'], 'https://images-na.ssl-images-amazon.com/images/I/81f8W%2BXlfHL._SY355_.jpg'),
  new BlogPost(5, new Date(1961, 8, 17), 'Terry Pratchett', 'Weatherwax',
    'Contents are shown here!!', ['sthu', 'btsbts']),
  new BlogPost(6, new Date(2008, 9, 25), 'Laredo Tornado', 'Jeff Lynne',
    'Contents are shown here!!', ['nijuyndki', 'evtrhe'], undefined, BlogPostStatus.INACTIVE),
  new BlogPost(7, new Date(2016, 12, 11), 'Hubba Bubba', 'Gum',
    'Contents are shown here!!', ['nibsstski', 'kanrtvheev']),
  new BlogPost(8, new Date(2000, 11, 30), 'Android', 'Broadcast reciever',
    'Contents are shown here!!', ['strs', 'hvet'], undefined, BlogPostStatus.INACTIVE),
];
