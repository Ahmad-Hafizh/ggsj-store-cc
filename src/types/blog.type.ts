import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBlogGgSjFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  content?: EntryFieldTypes.RichText;
}
export interface TypeBlogGgsjAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName?: string;
      contentType?: string;
    };
  };
}
export type TypeBlogGgSjSkeleton = EntrySkeletonType<
  TypeBlogGgSjFields,
  "blogGgSj"
>;
export type TypeBlogGgSj<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeBlogGgSjSkeleton, Modifiers, Locales>;
