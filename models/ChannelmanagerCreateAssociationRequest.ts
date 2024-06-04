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

import { HttpFile } from '../http/http';

export class ChannelmanagerCreateAssociationRequest {
    'tenantId'?: string;
    'channelGrn'?: string;
    'marketGrn'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelGrn",
            "baseName": "channelGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "marketGrn",
            "baseName": "marketGrn",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChannelmanagerCreateAssociationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

