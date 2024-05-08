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

import { ChannelmanagerUpdateChannelRequestPayload } from '../models/ChannelmanagerUpdateChannelRequestPayload';
import { HttpFile } from '../http/http';

export class ChannelmanagerUpdateChannelRequest {
    'tenantId': string;
    'id': string;
    'payload'?: ChannelmanagerUpdateChannelRequestPayload;
    'payloadMask'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "ChannelmanagerUpdateChannelRequestPayload",
            "format": ""
        },
        {
            "name": "payloadMask",
            "baseName": "payloadMask",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChannelmanagerUpdateChannelRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

