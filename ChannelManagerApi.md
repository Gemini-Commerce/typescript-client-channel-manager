# .ChannelManagerApi

All URIs are relative to *https://channel.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channelManagerCreateAssociation**](ChannelManagerApi.md#channelManagerCreateAssociation) | **POST** /channelmanager.ChannelManager/CreateAssociation | CreateAssociation
[**channelManagerCreateChannel**](ChannelManagerApi.md#channelManagerCreateChannel) | **POST** /channelmanager.ChannelManager/CreateChannel | CreateChannel
[**channelManagerCreateMarket**](ChannelManagerApi.md#channelManagerCreateMarket) | **POST** /channelmanager.ChannelManager/CreateMarket | CreateMarket
[**channelManagerDeleteAssociation**](ChannelManagerApi.md#channelManagerDeleteAssociation) | **POST** /channelmanager.ChannelManager/DeleteAssociation | DeleteAssociation
[**channelManagerDeleteChannel**](ChannelManagerApi.md#channelManagerDeleteChannel) | **POST** /channelmanager.ChannelManager/DeleteChannel | DeleteChannel
[**channelManagerDeleteMarket**](ChannelManagerApi.md#channelManagerDeleteMarket) | **POST** /channelmanager.ChannelManager/DeleteMarket | DeleteMarket
[**channelManagerGetChannel**](ChannelManagerApi.md#channelManagerGetChannel) | **POST** /channelmanager.ChannelManager/GetChannel | GetChannel
[**channelManagerGetChannelWithAssociations**](ChannelManagerApi.md#channelManagerGetChannelWithAssociations) | **POST** /channelmanager.ChannelManager/GetChannelWithAssociations | GetChannelWithAssociations
[**channelManagerGetMarket**](ChannelManagerApi.md#channelManagerGetMarket) | **POST** /channelmanager.ChannelManager/GetMarket | GetMarket
[**channelManagerGetMarketWithAssociations**](ChannelManagerApi.md#channelManagerGetMarketWithAssociations) | **POST** /channelmanager.ChannelManager/GetMarketWithAssociations | GetMarketWithAssociations
[**channelManagerListChannels**](ChannelManagerApi.md#channelManagerListChannels) | **POST** /channelmanager.ChannelManager/ListChannels | ListChannels
[**channelManagerListChannelsWithAssociations**](ChannelManagerApi.md#channelManagerListChannelsWithAssociations) | **POST** /channelmanager.ChannelManager/ListChannelsWithAssociations | ListChannelsWithAssociations
[**channelManagerListMarkets**](ChannelManagerApi.md#channelManagerListMarkets) | **POST** /channelmanager.ChannelManager/ListMarkets | ListMarkets
[**channelManagerListMarketsWithAssociations**](ChannelManagerApi.md#channelManagerListMarketsWithAssociations) | **POST** /channelmanager.ChannelManager/ListMarketsWithAssociations | ListMarketsWithAssociations
[**channelManagerUpdateChannel**](ChannelManagerApi.md#channelManagerUpdateChannel) | **POST** /channelmanager.ChannelManager/UpdateChannel | UpdateChannel
[**channelManagerUpdateMarket**](ChannelManagerApi.md#channelManagerUpdateMarket) | **POST** /channelmanager.ChannelManager/UpdateMarket | UpdateMarket


# **channelManagerCreateAssociation**
> ChannelmanagerAssociationResponse channelManagerCreateAssociation(body)

Create a new association between a channel and a market or entities

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerCreateAssociationRequest = {
  // ChannelmanagerCreateAssociationRequest
  body: {
    tenantId: "tenantId_example",
    channelGrn: "channelGrn_example",
    marketGrn: "marketGrn_example",
  },
};

apiInstance.channelManagerCreateAssociation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerCreateAssociationRequest**|  |


### Return type

**ChannelmanagerAssociationResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerCreateChannel**
> ChannelmanagerChannelResponse channelManagerCreateChannel(body)

Create a new channel

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerCreateChannelRequest = {
  // ChannelmanagerCreateChannelRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
    image: "image_example",
    name: "name_example",
    defaultLanguage: "LANGUAGE_CODE_UNKNOWN",
    settings: {
      hideOosProducts: true,
      hidePricelessProducts: true,
    },
    website: {
      domain: "domain_example",
    },
    status: "CH_STATUS_UNKNOWN",
  },
};

apiInstance.channelManagerCreateChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerCreateChannelRequest**|  |


### Return type

**ChannelmanagerChannelResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerCreateMarket**
> ChannelmanagerMarketResponse channelManagerCreateMarket(body)

Create a new market

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerCreateMarketRequest = {
  // ChannelmanagerCreateMarketRequest
  body: {
    tenantId: "tenantId_example",
    name: "name_example",
    description: "description_example",
    countries: [
      "COUNTRY_CODE_UNKNOWN",
    ],
  },
};

apiInstance.channelManagerCreateMarket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerCreateMarketRequest**|  |


### Return type

**ChannelmanagerMarketResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerDeleteAssociation**
> any channelManagerDeleteAssociation(body)

Delete an existing association between a channel and a market or entities

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerDeleteAssociationRequest = {
  // ChannelmanagerDeleteAssociationRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.channelManagerDeleteAssociation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerDeleteAssociationRequest**|  |


### Return type

**any**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerDeleteChannel**
> any channelManagerDeleteChannel(body)

Soft delete an existing channel

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerDeleteChannelRequest = {
  // ChannelmanagerDeleteChannelRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.channelManagerDeleteChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerDeleteChannelRequest**|  |


### Return type

**any**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerDeleteMarket**
> any channelManagerDeleteMarket(body)

Soft delete an existing market

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerDeleteMarketRequest = {
  // ChannelmanagerDeleteMarketRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.channelManagerDeleteMarket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerDeleteMarketRequest**|  |


### Return type

**any**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerGetChannel**
> ChannelmanagerChannelResponse channelManagerGetChannel(body)

Get an existing channel

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerGetChannelRequest = {
  // ChannelmanagerGetChannelRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.channelManagerGetChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerGetChannelRequest**|  |


### Return type

**ChannelmanagerChannelResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerGetChannelWithAssociations**
> ChannelmanagerChannelResponseWithAssociations channelManagerGetChannelWithAssociations(body)

Get an existing channel with associations

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerGetChannelWithAssociationsRequest = {
  // ChannelmanagerGetChannelWithAssociationsRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.channelManagerGetChannelWithAssociations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerGetChannelWithAssociationsRequest**|  |


### Return type

**ChannelmanagerChannelResponseWithAssociations**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerGetMarket**
> ChannelmanagerMarketResponse channelManagerGetMarket(body)

Get an existing market

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerGetMarketRequest = {
  // ChannelmanagerGetMarketRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.channelManagerGetMarket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerGetMarketRequest**|  |


### Return type

**ChannelmanagerMarketResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerGetMarketWithAssociations**
> ChannelmanagerMarketResponseWithAssociations channelManagerGetMarketWithAssociations(body)

Get an existing market with associations

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerGetMarketWithAssociationsRequest = {
  // ChannelmanagerGetMarketWithAssociationsRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.channelManagerGetMarketWithAssociations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerGetMarketWithAssociationsRequest**|  |


### Return type

**ChannelmanagerMarketResponseWithAssociations**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerListChannels**
> ChannelmanagerListChannelsResponse channelManagerListChannels(body)

List all channels

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerListChannelsRequest = {
  // ChannelmanagerListChannelsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.channelManagerListChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerListChannelsRequest**|  |


### Return type

**ChannelmanagerListChannelsResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerListChannelsWithAssociations**
> ChannelmanagerListChannelsWithAssociationsResponse channelManagerListChannelsWithAssociations(body)

List all channels with associations

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerListChannelsWithAssociationsRequest = {
  // ChannelmanagerListChannelsWithAssociationsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.channelManagerListChannelsWithAssociations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerListChannelsWithAssociationsRequest**|  |


### Return type

**ChannelmanagerListChannelsWithAssociationsResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerListMarkets**
> ChannelmanagerListMarketsResponse channelManagerListMarkets(body)

List all markets

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerListMarketsRequest = {
  // ChannelmanagerListMarketsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.channelManagerListMarkets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerListMarketsRequest**|  |


### Return type

**ChannelmanagerListMarketsResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerListMarketsWithAssociations**
> ChannelmanagerListMarketsWithAssociationsResponse channelManagerListMarketsWithAssociations(body)

List all markets with associations

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerListMarketsWithAssociationsRequest = {
  // ChannelmanagerListMarketsWithAssociationsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.channelManagerListMarketsWithAssociations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerListMarketsWithAssociationsRequest**|  |


### Return type

**ChannelmanagerListMarketsWithAssociationsResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerUpdateChannel**
> ChannelmanagerChannelResponse channelManagerUpdateChannel(body)

Update an existing channel

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerUpdateChannelRequest = {
  // ChannelmanagerUpdateChannelRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    payload: {
      image: "image_example",
      name: "name_example",
      defaultLanguage: "LANGUAGE_CODE_UNKNOWN",
      settings: {
        hideOosProducts: true,
        hidePricelessProducts: true,
      },
      website: {
        domain: "domain_example",
      },
      status: "CH_STATUS_UNKNOWN",
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.channelManagerUpdateChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerUpdateChannelRequest**|  |


### Return type

**ChannelmanagerChannelResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelManagerUpdateMarket**
> ChannelmanagerMarketResponse channelManagerUpdateMarket(body)

Update an existing market

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelManagerApi(configuration);

let body:.ChannelManagerApiChannelManagerUpdateMarketRequest = {
  // ChannelmanagerUpdateMarketRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    payload: {
      name: "name_example",
      description: "description_example",
      countries: [
        "COUNTRY_CODE_UNKNOWN",
      ],
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.channelManagerUpdateMarket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ChannelmanagerUpdateMarketRequest**|  |


### Return type

**ChannelmanagerMarketResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


