/**
 * Channel Manager Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ChannelmanagerCountryCode } from '../models/ChannelmanagerCountryCode';
import { ChannelmanagerMarketResponseWithAssociationsAssociation } from '../models/ChannelmanagerMarketResponseWithAssociationsAssociation';
import { HttpFile } from '../http/http';

export class ChannelmanagerMarketResponseWithAssociations {
    'id'?: string;
    'grn'?: string;
    'name'?: string;
    'description'?: string;
    'countries'?: Array<ChannelmanagerCountryCode>;
    'associations'?: Array<ChannelmanagerMarketResponseWithAssociationsAssociation>;
    'createdAt'?: Date;
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "grn",
            "baseName": "grn",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<ChannelmanagerCountryCode>",
            "format": ""
        },
        {
            "name": "associations",
            "baseName": "associations",
            "type": "Array<ChannelmanagerMarketResponseWithAssociationsAssociation>",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return ChannelmanagerMarketResponseWithAssociations.attributeTypeMap;
    }

    public constructor() {
    }
}

