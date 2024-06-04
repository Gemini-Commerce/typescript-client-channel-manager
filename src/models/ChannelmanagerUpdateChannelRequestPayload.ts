/* tslint:disable */
/* eslint-disable */
/**
 * Channel Manager Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface ChannelmanagerUpdateChannelRequestPayload
 */
export interface ChannelmanagerUpdateChannelRequestPayload {
    /**
     * 
     * @type {string}
     * @memberof ChannelmanagerUpdateChannelRequestPayload
     */
    'image'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelmanagerUpdateChannelRequestPayload
     */
    'name'?: string;
    /**
     * 
     * @type {ChannelmanagerLanguageCode}
     * @memberof ChannelmanagerUpdateChannelRequestPayload
     */
    'defaultLanguage'?: ChannelmanagerLanguageCode;
    /**
     * 
     * @type {ChannelmanagerChannelSettings}
     * @memberof ChannelmanagerUpdateChannelRequestPayload
     */
    'settings'?: ChannelmanagerChannelSettings;
    /**
     * 
     * @type {ChannelmanagerChannelTypeWebsite}
     * @memberof ChannelmanagerUpdateChannelRequestPayload
     */
    'website'?: ChannelmanagerChannelTypeWebsite;
    /**
     * 
     * @type {ChannelmanagerChannelStatus}
     * @memberof ChannelmanagerUpdateChannelRequestPayload
     */
    'status'?: ChannelmanagerChannelStatus;
}
