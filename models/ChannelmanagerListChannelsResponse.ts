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

import { ChannelmanagerChannelResponse } from '../models/ChannelmanagerChannelResponse';
import { HttpFile } from '../http/http';

export class ChannelmanagerListChannelsResponse {
    'channels'?: Array<ChannelmanagerChannelResponse>;
    'nextPageToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channels",
            "baseName": "channels",
            "type": "Array<ChannelmanagerChannelResponse>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "nextPageToken",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChannelmanagerListChannelsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

