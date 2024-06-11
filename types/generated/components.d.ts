import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBlogCards extends Schema.Component {
  collectionName: 'components_blocks_blog_cards';
  info: {
    displayName: 'blog_cards';
  };
  attributes: {
    heading: Attribute.String;
    card_blog: Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksFooter extends Schema.Component {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    desc: Attribute.Component<'elements.footer-description'>;
    quick_links: Attribute.Component<'elements.quick-link'>;
    contact_us: Attribute.Component<'elements.contact-us'>;
    footer_form: Attribute.Component<'elements.footer-input-merge-follw-us'>;
  };
}

export interface BlocksHeader extends Schema.Component {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    links: Attribute.Relation<'blocks.header', 'oneToMany', 'api::link.link'>;
    btn: Attribute.Component<'elements.button', true>;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    card_img: Attribute.Media<'images'>;
    blog_type_heading: Attribute.String;
    admin: Attribute.String;
    date: Attribute.Date;
    main_heading: Attribute.String;
    main_description: Attribute.Text;
    btn: Attribute.Component<'elements.button'>;
  };
}

export interface ElementsContactUs extends Schema.Component {
  collectionName: 'components_elements_contact_uses';
  info: {
    displayName: 'contact_us';
  };
  attributes: {
    address: Attribute.String;
    phone: Attribute.BigInteger;
    mail: Attribute.String;
    website: Attribute.String;
  };
}

export interface ElementsFollowUs extends Schema.Component {
  collectionName: 'components_elements_follow_uses';
  info: {
    displayName: 'Follow_us';
  };
  attributes: {
    facebook: Attribute.Media<'images'>;
    twitter: Attribute.Media<'images'>;
    insta: Attribute.Media<'images'>;
    linkedIn: Attribute.Media<'images'>;
  };
}

export interface ElementsFooterDescription extends Schema.Component {
  collectionName: 'components_elements_footer_descriptions';
  info: {
    displayName: 'footer_description';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsFooterInputMergeFollwUs extends Schema.Component {
  collectionName: 'components_elements_footer_input_merge_follw_uses';
  info: {
    displayName: 'footer__input_merge_follw_us';
    description: '';
  };
  attributes: {
    follow_links: Attribute.Component<'elements.follow-us'>;
    form: Attribute.Component<'elements.input'>;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    label: Attribute.String;
    placeHolder: Attribute.String;
    inp: Attribute.String;
  };
}

export interface ElementsQuickLink extends Schema.Component {
  collectionName: 'components_elements_quick_links';
  info: {
    displayName: 'quick_link';
  };
  attributes: {
    heading: Attribute.String;
    links: Attribute.Relation<
      'elements.quick-link',
      'oneToMany',
      'api::link.link'
    >;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImg: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.blog-cards': BlocksBlogCards;
      'blocks.footer': BlocksFooter;
      'blocks.header': BlocksHeader;
      'elements.button': ElementsButton;
      'elements.card': ElementsCard;
      'elements.contact-us': ElementsContactUs;
      'elements.follow-us': ElementsFollowUs;
      'elements.footer-description': ElementsFooterDescription;
      'elements.footer-input-merge-follw-us': ElementsFooterInputMergeFollwUs;
      'elements.input': ElementsInput;
      'elements.quick-link': ElementsQuickLink;
      'seo.meta-data': SeoMetaData;
    }
  }
}
