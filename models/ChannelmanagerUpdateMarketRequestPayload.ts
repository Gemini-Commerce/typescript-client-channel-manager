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
import { HttpFile } from '../http/http';

export class ChannelmanagerUpdateMarketRequestPayload {
    'name'?: string;
    'description'?: string;
    'countries'?: Array<ChannelmanagerCountryCode>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return ChannelmanagerUpdateMarketRequestPayload.attributeTypeMap;
    }

    public constructor() {
    }
}
