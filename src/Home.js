import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import database from '@react-native-firebase/database';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
  const data = {
    guid: '5a756d6c-112a-4d76-9de6-5f03c8d1c8d8',
    inspection_id: 16870,
    completed_line_input_controls: 546,
    incomplete_line_input_controls: 505,
    bucket_url: 'https://cloudfront.report.palmtech.com/',
    bucket_url_2: 'https://cloudfront.portal.palmtech.com/',
    status: 0,
    isn_report_published_on: null,
    cover_photo: {
      id: 'dd6e1c0a-9233-4b04-b3e5-9282d0e029be',
      url: 'file:///data/user/0/com.palmtech.year2023/files/14580/17068949107800dc02aa6-7f95-42b1-b1e8-415b9fd236c9.jpg',
      name: '0dc02aa6-7f95-42b1-b1e8-415b9fd236c9.jpg',
      size: 668698,
      type: 'image/png',
      edited: false,
      newUrl:
        'file:///data/user/0/com.palmtech.year2023/files/14580/17068949107800dc02aa6-7f95-42b1-b1e8-415b9fd236c9.jpg',
      online: 'online',
      filetype: 'image',
      localUrl:
        'file:///data/user/0/com.palmtech.year2023/files/14580/17068949107800dc02aa6-7f95-42b1-b1e8-415b9fd236c9.jpg',
      OriginUrl: '',
      editCount: 0,
      onlineUrl:
        '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/inspection-media/images/1706894926_dd6e1c0a-9233-4b04-b3e5-9282d0e029be.jpg',
      orginName: '0dc02aa6-7f95-42b1-b1e8-415b9fd236c9.jpg',
      thumbnail:
        '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/null/thumbnails/17068949260d15df24-9526-4103-aaaf-5a537898822a.jpg',
      is_deleted: 0,
      updated_at: '2024-02-02 17:28:31',
      description: '',
      OriginlocalUrl: null,
    },
    attachments: [
      {
        id: '6d6398f0-72f3-4020-9bf5-65419600ce64',
        url: 'file:///var/mobile/Containers/Data/Application/7BD479A9-ECA2-45AB-931F-9035090FBDBF/Documents/14580/1706184677215SampleJPGImage_2mbmb 2.jpg',
        name: 'SampleJPGImage_2mbmb 2.jpg',
        size: 2101546,
        type: 'image/jpeg',
        edited: false,
        newUrl:
          'file:///var/mobile/Containers/Data/Application/7BD479A9-ECA2-45AB-931F-9035090FBDBF/Documents/14580/1706184677215SampleJPGImage_2mbmb 2.jpg',
        online: 'online',
        filetype: 'image/jpeg',
        OriginUrl: null,
        onlineUrl:
          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/inspection-media/files/1706184749643cc393-aa4a-4528-83ee-0d8507dc50ee.jpg',
        orginName: 'SampleJPGImage_2mbmb 2.jpg',
        thumbnail: null,
        created_at: '2024-01-25 12:11:14',
        is_deleted: 0,
        updated_at: '2024-01-25 12:11:14',
        description: 'Jpg',
      },
      {
        id: '8dbf8edb-c1f0-4815-bf32-fbf9c4aa6e4c',
        url: 'file:///var/mobile/Containers/Data/Application/7BD479A9-ECA2-45AB-931F-9035090FBDBF/Documents/14580/1706184929784SampleJPGImage_50kbmb.jpg',
        name: 'SampleJPGImage_50kbmb.jpg',
        size: 51085,
        type: 'image/jpeg',
        edited: false,
        newUrl:
          'file:///var/mobile/Containers/Data/Application/7BD479A9-ECA2-45AB-931F-9035090FBDBF/Documents/14580/1706184929784SampleJPGImage_50kbmb.jpg',
        online: 'online',
        filetype: 'image/jpeg',
        OriginUrl: null,
        onlineUrl:
          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/inspection-media/files/17061849909e6c3c5b-f0c7-4506-b46f-5e7cf5946345.jpg',
        orginName: 'SampleJPGImage_50kbmb.jpg',
        thumbnail: null,
        created_at: '2024-01-25 12:15:25',
        is_deleted: 0,
        updated_at: '2024-01-25 12:15:25',
        description: 'Jpg',
      },
    ],
    inspectiontemplates: [
      {
        inspection_id: 16870,
        template_id: 79286,
        template_guid: 'c1a612e1-811f-46f5-864d-3f57aa914903',
        name: 'Default Home Template',
        is_texas: 0,
        rating_data: [
          {
            Id: '1',
            Name: 'Inspected',
            Color: '#6DD400',
            Definition:
              'The Item or component was inspected and no material defects were observed. Cosmetic issues may have been observed.',
            is_default: '0',
            include_in_summary: '0',
          },
          {
            Id: '2',
            Name: 'Maintenance',
            Color: '#6236FF',
            Definition:
              'The Item or component requires regular maintenance for continued optimal performance.',
            is_default: '0',
            include_in_summary: '0',
          },
          {
            Id: '3',
            Name: 'Recommendation',
            Color: '#24C2BF',
            Definition:
              'The Item or component appears operational, but inspector recommends action be taken for conditions that are beyond cosmetic.',
            is_default: '0',
            include_in_summary: '0',
          },
          {
            Id: '4',
            Name: 'Requires Attention',
            Color: '#FA6400',
            Definition:
              'The Item or component is not functioning as intended requires maintenance or repair. Recommend repair or further evaluation by a qualified contractor.',
            is_default: '0',
            include_in_summary: '1',
          },
          {
            Id: '5',
            Name: 'Safety',
            Color: '#E02020',
            Definition:
              'The item or component appears to be unsafe and should be corrected as soon as possible a qualified contractor.',
            is_default: '0',
            include_in_summary: '1',
          },
        ],
        location_data: [
          {
            col: '1',
            uuid: '52726542-8fe2-11ed-a1eb-0242ac120002',
            order: '1',
            value: 'North',
          },
          {
            col: '2',
            uuid: '5edae0fc-8fe2-11ed-a1eb-0242ac120002',
            order: '1',
            value: 'Kitchen',
          },
          {
            col: '3',
            uuid: '8cb29862-8fe2-11ed-a1eb-0242ac120002',
            order: '1',
            value: '1st Floor',
          },
          {
            col: '1',
            uuid: '9c1ad896-8fe2-11ed-a1eb-0242ac120002',
            order: '2',
            value: 'South',
          },
          {
            col: '2',
            uuid: 'a5925b60-8fe2-11ed-a1eb-0242ac120002',
            order: '2',
            value: 'Bedroom',
          },
          {
            col: '3',
            uuid: 'af08c8aa-8fe2-11ed-a1eb-0242ac120002',
            order: '2',
            value: '2nd Floor',
          },
          {
            col: '1',
            uuid: 'b7e3ab98-8fe2-11ed-a1eb-0242ac120002',
            order: '3',
            value: 'East',
          },
          {
            col: '2',
            uuid: 'c1cca2f4-8fe2-11ed-a1eb-0242ac120002',
            order: '3',
            value: 'Dining room',
          },
          {
            col: '3',
            uuid: 'c94a46c6-8fe2-11ed-a1eb-0242ac120002',
            order: '3',
            value: '3rd Floor',
          },
          {
            col: '1',
            uuid: 'd1686dc4-8fe2-11ed-a1eb-0242ac120002',
            order: '4',
            value: 'West',
          },
          {
            col: '2',
            uuid: 'daf5396c-8fe2-11ed-a1eb-0242ac120002',
            order: '4',
            value: 'Garage',
          },
          {
            col: '3',
            uuid: 'fbb8289e-8fe2-11ed-a1eb-0242ac120002',
            order: '4',
            value: 'Living room',
          },
          {
            col: '1',
            uuid: '02afed58-8fe3-11ed-a1eb-0242ac120002',
            order: '5',
            value: 'Northwest',
          },
          {
            col: '2',
            uuid: '09d8b042-8fe3-11ed-a1eb-0242ac120002',
            order: '5',
            value: 'Closet',
          },
          {
            col: '3',
            uuid: '122de596-8fe3-11ed-a1eb-0242ac120002',
            order: '5',
            value: 'Bathroom',
          },
          {
            col: '1',
            uuid: '1c25a1ba-8fe3-11ed-a1eb-0242ac120002',
            order: '6',
            value: 'Northeast',
          },
          {
            col: '2',
            uuid: '2a922d9a-8fe3-11ed-a1eb-0242ac120002',
            order: '6',
            value: 'Master',
          },
          {
            col: '3',
            uuid: '7c9deae8-8fe3-11ed-a1eb-0242ac120002',
            order: '6',
            value: 'Attic',
          },
          {
            col: '1',
            uuid: '6ee6148e-8fe3-11ed-a1eb-0242ac120002',
            order: '7',
            value: 'Southwest',
          },
          {
            col: '2',
            uuid: '660cbf16-8fe3-11ed-a1eb-0242ac120002',
            order: '7',
            value: 'Basement',
          },
          {
            col: '3',
            uuid: '5d2f2262-8fe3-11ed-a1eb-0242ac120002',
            order: '7',
            value: 'Utility room',
          },
          {
            col: '1',
            uuid: '53a14914-8fe3-11ed-a1eb-0242ac120002',
            order: '8',
            value: 'Southeast',
          },
          {
            col: '2',
            uuid: '49f80010-8fe3-11ed-a1eb-0242ac120002',
            order: '8',
            value: 'Crawlspace',
          },
          {
            col: '3',
            uuid: '334cae4c-8fe3-11ed-a1eb-0242ac120002',
            order: '8',
            value: 'Laundry',
          },
        ],
        categories: [
          {
            id: 979675,
            uuid: '4969aa46-0e3b-43fa-8381-1e57fbe5efe3',
            template_id: 79286,
            prompt: 'Grounds',
            introductory_text: null,
            lines: [
              {
                uuid: '389333fe-c7a9-4599-9f46-9c4fb6a9b0dd',
                order: 1,
                prompt: 'Type',
                line_id: 'c10036f2-a212-4e84-afaa-d4b5a9da37b2',
                comments: [
                  {
                    uuid: 'a24823a4-5a0a-4064-add3-b42d45d6d785',
                    prompt: null,
                    comment_id: '16754e09-485a-436e-81b6-4120156659f3',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Gaps not properly sealed at</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: 'a7f77915-ce3f-41de-8ce9-3a153554f1de',
                    prompt: null,
                    comment_id: 'b9d58e65-baae-446f-b4f1-403539d93b95',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation:
                      '<p>EIFS exterior finishes are prone to water infiltration and may cause hidden damage to the structure. There is usually no visible evidence of such damage. We recommend a detailed inspection by a qualified specialist.</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: 'aff03374-4217-4aa7-9f1a-fa9e5d975674',
                    prompt: null,
                    comment_id: 'd8c43f93-4a4a-4aa7-9ba6-38f513b2e7a1',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Visible settling</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '6a9bf2cf-08f0-40e7-94d8-0c6034befa84',
                    prompt: null,
                    comment_id: 'e2dd3429-ab7e-471c-9f58-626e6c88b9c1',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Improper siding</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '81391ad7-a82c-4dba-9a99-0ff702c506af',
                    prompt: null,
                    comment_id: '74058cdc-7993-40b8-82e9-5c21225d4e78',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Moisture stains</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: 'adb4bfc2-5af2-4d10-8d46-9fbafe112f3c',
                    prompt: null,
                    comment_id: '5a94dd89-9943-43c4-a151-ba998b492a9f',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Paint peeling</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '8ebe06ac-1fde-44f9-bfd5-10742144318d',
                    prompt: null,
                    comment_id: '238f0a16-23da-44ce-acd4-501088454465',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Rot noted</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '3803347e-6dcf-4acd-b881-2b3ae2f4aa68',
                    prompt: null,
                    comment_id: 'bcfe8798-8cac-40de-9141-7b3bc0e18706',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Stress cracks</p>',
                    comment_input_controls: [],
                  },
                ],
                optional: 0,
                is_deleted: 0,
                updated_at: '2023-10-16 12:18:06',
                line_input_controls: [
                  {
                    data: [],
                    type: 'Description',
                    uuid: '989bdb07-9c06-42a4-98bc-e0db0f7a23c0',
                    prompt: 'Description',
                    values: [
                      {
                        uuid: '7d11c358-5a63-4d96-9512-39525589cb10',
                        value: 'Brick veneer',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: 'fb8f5b30-5c1a-4409-99a2-9c6d0575653a',
                        value: 'Block',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: 'b05841a4-760f-4700-abd3-642fe1920b27',
                        value: 'Aluminum siding',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '6448dad2-baa7-41af-b276-8224c48b5ca9',
                        value: 'Vinyl siding',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '1b108036-71da-4f8f-bd70-b95b36dc0abf',
                        value: 'Wood',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '822c0590-68a6-4065-99a9-a3e326141a1b',
                        value: 'EIFS stucco',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '02282cfd-61e8-4578-b77f-3f45e3238d15',
                        value: 'Fibrous',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '85706315-a8b3-48ef-b3ce-e16f26850ed2',
                        value: 'Metal',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: 'dedadb0e-edf2-4298-81ad-b09e46641565',
                        value: 'Stucco',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                    ],
                    updated_at: '2023-10-16 12:18:06',
                    line_input_control_id:
                      'd59e0135-535d-4110-985d-0b11b8372bc3',
                  },
                  {
                    data: [
                      {
                        id: 'a04bc9ee-dcfd-471a-bdec-152d7d032333',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/1706726950219rn_image_picker_lib_temp_2bfb6ac9-8bbb-43d0-a48c-0d5e77e65034.png',
                        name: 'rn_image_picker_lib_temp_2bfb6ac9-8bbb-43d0-a48c-0d5e77e65034.png',
                        size: 122969,
                        type: 'image/png',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706726950219rn_image_picker_lib_temp_2bfb6ac9-8bbb-43d0-a48c-0d5e77e65034.png',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706726950219rn_image_picker_lib_temp_2bfb6ac9-8bbb-43d0-a48c-0d5e77e65034.png',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706726950219rn_image_picker_lib_temp_2bfb6ac9-8bbb-43d0-a48c-0d5e77e65034.png',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706726950219rn_image_picker_lib_temp_2bfb6ac9-8bbb-43d0-a48c-0d5e77e65034.png',
                        orginName:
                          'rn_image_picker_lib_temp_2bfb6ac9-8bbb-43d0-a48c-0d5e77e65034.png',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706726950219rn_image_picker_lib_temp_2bfb6ac9-8bbb-43d0-a48c-0d5e77e65034.jpg',
                        is_deleted: 0,
                        updated_at: '2024-01-31 18:49:11',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706726950219rn_image_picker_lib_temp_2bfb6ac9-8bbb-43d0-a48c-0d5e77e65034.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '16312c63-5bd3-4262-b94f-e2b2b6f65f6b',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/1706746337972rn_image_picker_lib_temp_73a62f79-60e3-4f1c-b55c-0552d2e4d4c1.jpg',
                        name: 'rn_image_picker_lib_temp_73a62f79-60e3-4f1c-b55c-0552d2e4d4c1.jpg',
                        size: 679122,
                        type: 'image/png',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706746337972rn_image_picker_lib_temp_73a62f79-60e3-4f1c-b55c-0552d2e4d4c1.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706746337972rn_image_picker_lib_temp_73a62f79-60e3-4f1c-b55c-0552d2e4d4c1.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706746337972rn_image_picker_lib_temp_73a62f79-60e3-4f1c-b55c-0552d2e4d4c1.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706746337972rn_image_picker_lib_temp_73a62f79-60e3-4f1c-b55c-0552d2e4d4c1.jpg',
                        orginName:
                          'rn_image_picker_lib_temp_73a62f79-60e3-4f1c-b55c-0552d2e4d4c1.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706746337972rn_image_picker_lib_temp_73a62f79-60e3-4f1c-b55c-0552d2e4d4c1.jpg',
                        is_deleted: 0,
                        updated_at: '2024-02-01 00:12:18',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706746337972rn_image_picker_lib_temp_73a62f79-60e3-4f1c-b55c-0552d2e4d4c1.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '1a7e4f71-66af-4fef-a521-4d591a078652',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/1706750667175rn_image_picker_lib_temp_b17b1230-0067-42f8-8d0e-9b0b9bc41b41.png',
                        name: 'rn_image_picker_lib_temp_b17b1230-0067-42f8-8d0e-9b0b9bc41b41.png',
                        size: 122969,
                        type: 'image/jpeg',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706750667175rn_image_picker_lib_temp_b17b1230-0067-42f8-8d0e-9b0b9bc41b41.png',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706750667175rn_image_picker_lib_temp_b17b1230-0067-42f8-8d0e-9b0b9bc41b41.png',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706750667175rn_image_picker_lib_temp_b17b1230-0067-42f8-8d0e-9b0b9bc41b41.png',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706750667175rn_image_picker_lib_temp_b17b1230-0067-42f8-8d0e-9b0b9bc41b41.png',
                        orginName:
                          'rn_image_picker_lib_temp_b17b1230-0067-42f8-8d0e-9b0b9bc41b41.png',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706750667175rn_image_picker_lib_temp_b17b1230-0067-42f8-8d0e-9b0b9bc41b41.jpg',
                        is_deleted: 0,
                        updated_at: '2024-02-01 01:24:28',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706750667175rn_image_picker_lib_temp_b17b1230-0067-42f8-8d0e-9b0b9bc41b41.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '5b698473-5d6c-46d4-a2e8-fd91183fad78',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/17067508748329284c12b-9fa4-4993-ae3a-c987fdf4f01b.jpg',
                        name: '9284c12b-9fa4-4993-ae3a-c987fdf4f01b.jpg',
                        size: 691112,
                        type: 'image/jpeg',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/17067508748329284c12b-9fa4-4993-ae3a-c987fdf4f01b.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/17067508748329284c12b-9fa4-4993-ae3a-c987fdf4f01b.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/17067508748329284c12b-9fa4-4993-ae3a-c987fdf4f01b.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/17067508748329284c12b-9fa4-4993-ae3a-c987fdf4f01b.jpg',
                        orginName: '9284c12b-9fa4-4993-ae3a-c987fdf4f01b.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/17067508748329284c12b-9fa4-4993-ae3a-c987fdf4f01b.jpg',
                        is_deleted: 0,
                        updated_at: '2024-02-01 01:27:55',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/17067508748329284c12b-9fa4-4993-ae3a-c987fdf4f01b.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '6815e4c5-a53c-4ae8-8060-ec5f28f65801',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/1706751799280rn_image_picker_lib_temp_82b036a0-deee-43b2-8384-b8a42447308c.jpg',
                        name: 'rn_image_picker_lib_temp_82b036a0-deee-43b2-8384-b8a42447308c.jpg',
                        size: 691112,
                        type: 'image/jpeg',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706751799280rn_image_picker_lib_temp_82b036a0-deee-43b2-8384-b8a42447308c.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706751799280rn_image_picker_lib_temp_82b036a0-deee-43b2-8384-b8a42447308c.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706751799280rn_image_picker_lib_temp_82b036a0-deee-43b2-8384-b8a42447308c.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706751799280rn_image_picker_lib_temp_82b036a0-deee-43b2-8384-b8a42447308c.jpg',
                        orginName:
                          'rn_image_picker_lib_temp_82b036a0-deee-43b2-8384-b8a42447308c.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706751799280rn_image_picker_lib_temp_82b036a0-deee-43b2-8384-b8a42447308c.jpg',
                        is_deleted: 0,
                        updated_at: '2024-02-01 01:43:19',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706751799280rn_image_picker_lib_temp_82b036a0-deee-43b2-8384-b8a42447308c.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '6a32156b-c1bc-4d72-8fc8-45a550f6bf54',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/1706751888891rn_image_picker_lib_temp_9d4d06cd-9d93-4243-b33a-d400f9bb6b73.jpg',
                        name: 'rn_image_picker_lib_temp_9d4d06cd-9d93-4243-b33a-d400f9bb6b73.jpg',
                        size: 691112,
                        type: 'image/jpeg',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706751888891rn_image_picker_lib_temp_9d4d06cd-9d93-4243-b33a-d400f9bb6b73.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706751888891rn_image_picker_lib_temp_9d4d06cd-9d93-4243-b33a-d400f9bb6b73.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706751888891rn_image_picker_lib_temp_9d4d06cd-9d93-4243-b33a-d400f9bb6b73.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706751888891rn_image_picker_lib_temp_9d4d06cd-9d93-4243-b33a-d400f9bb6b73.jpg',
                        orginName:
                          'rn_image_picker_lib_temp_9d4d06cd-9d93-4243-b33a-d400f9bb6b73.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706751888891rn_image_picker_lib_temp_9d4d06cd-9d93-4243-b33a-d400f9bb6b73.jpg',
                        is_deleted: 0,
                        updated_at: '2024-02-01 01:44:49',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706751888891rn_image_picker_lib_temp_9d4d06cd-9d93-4243-b33a-d400f9bb6b73.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: 'de26b484-1a71-4cf8-ba57-a7ae2c58d40a',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/1706752007892rn_image_picker_lib_temp_db047978-0d52-4854-8b13-e981cb7e5695.jpg',
                        name: 'rn_image_picker_lib_temp_db047978-0d52-4854-8b13-e981cb7e5695.jpg',
                        size: 691112,
                        type: 'image/jpeg',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706752007892rn_image_picker_lib_temp_db047978-0d52-4854-8b13-e981cb7e5695.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706752007892rn_image_picker_lib_temp_db047978-0d52-4854-8b13-e981cb7e5695.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706752007892rn_image_picker_lib_temp_db047978-0d52-4854-8b13-e981cb7e5695.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706752007892rn_image_picker_lib_temp_db047978-0d52-4854-8b13-e981cb7e5695.jpg',
                        orginName:
                          'rn_image_picker_lib_temp_db047978-0d52-4854-8b13-e981cb7e5695.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706752007892rn_image_picker_lib_temp_db047978-0d52-4854-8b13-e981cb7e5695.jpg',
                        is_deleted: 0,
                        updated_at: '2024-02-01 01:46:48',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706752007892rn_image_picker_lib_temp_db047978-0d52-4854-8b13-e981cb7e5695.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '1dbf0ddc-b0bd-4c39-964a-f30f23dc77e9',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/1706752634291rn_image_picker_lib_temp_577f33de-7c32-49b6-b416-47011c0160b2.jpg',
                        name: 'rn_image_picker_lib_temp_577f33de-7c32-49b6-b416-47011c0160b2.jpg',
                        size: 660969,
                        type: 'image/jpeg',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706752634291rn_image_picker_lib_temp_577f33de-7c32-49b6-b416-47011c0160b2.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706752634291rn_image_picker_lib_temp_577f33de-7c32-49b6-b416-47011c0160b2.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706752634291rn_image_picker_lib_temp_577f33de-7c32-49b6-b416-47011c0160b2.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706752634291rn_image_picker_lib_temp_577f33de-7c32-49b6-b416-47011c0160b2.jpg',
                        orginName:
                          'rn_image_picker_lib_temp_577f33de-7c32-49b6-b416-47011c0160b2.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706752634291rn_image_picker_lib_temp_577f33de-7c32-49b6-b416-47011c0160b2.jpg',
                        is_deleted: 0,
                        updated_at: '2024-02-01 01:57:15',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706752634291rn_image_picker_lib_temp_577f33de-7c32-49b6-b416-47011c0160b2.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '92005997-f428-4baf-b8a6-c7c138684041',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/1706753166246f4519895-06bd-4d0d-a436-a93309398e1d.jpg',
                        name: 'f4519895-06bd-4d0d-a436-a93309398e1d.jpg',
                        size: 723294,
                        type: 'image/jpeg',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706753166246f4519895-06bd-4d0d-a436-a93309398e1d.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706753166246f4519895-06bd-4d0d-a436-a93309398e1d.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706753166246f4519895-06bd-4d0d-a436-a93309398e1d.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706753166246f4519895-06bd-4d0d-a436-a93309398e1d.jpg',
                        orginName: 'f4519895-06bd-4d0d-a436-a93309398e1d.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706753166246f4519895-06bd-4d0d-a436-a93309398e1d.jpg',
                        is_deleted: 0,
                        updated_at: '2024-02-01 02:06:06',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706753166246f4519895-06bd-4d0d-a436-a93309398e1d.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '7a06ecbb-624f-4471-ba1d-57e620e38a74',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/1706753185209rn_image_picker_lib_temp_08efb1cb-385a-4533-86ad-1f22da220f22.jpg',
                        name: 'rn_image_picker_lib_temp_08efb1cb-385a-4533-86ad-1f22da220f22.jpg',
                        size: 723294,
                        type: 'image/jpeg',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706753185209rn_image_picker_lib_temp_08efb1cb-385a-4533-86ad-1f22da220f22.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706753185209rn_image_picker_lib_temp_08efb1cb-385a-4533-86ad-1f22da220f22.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706753185209rn_image_picker_lib_temp_08efb1cb-385a-4533-86ad-1f22da220f22.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706753185209rn_image_picker_lib_temp_08efb1cb-385a-4533-86ad-1f22da220f22.jpg',
                        orginName:
                          'rn_image_picker_lib_temp_08efb1cb-385a-4533-86ad-1f22da220f22.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706753185209rn_image_picker_lib_temp_08efb1cb-385a-4533-86ad-1f22da220f22.jpg',
                        is_deleted: 0,
                        updated_at: '2024-02-01 02:06:25',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706753185209rn_image_picker_lib_temp_08efb1cb-385a-4533-86ad-1f22da220f22.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '38749e58-549f-4014-b643-b9a30150419e',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/17067540763601fc0a969-e752-45fa-8c6e-1555a06ed894.jpg',
                        name: '1fc0a969-e752-45fa-8c6e-1555a06ed894.jpg',
                        size: 735247,
                        type: 'image/jpeg',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/17067540763601fc0a969-e752-45fa-8c6e-1555a06ed894.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/17067540763601fc0a969-e752-45fa-8c6e-1555a06ed894.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/17067540763601fc0a969-e752-45fa-8c6e-1555a06ed894.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/17067540763601fc0a969-e752-45fa-8c6e-1555a06ed894.jpg',
                        orginName: '1fc0a969-e752-45fa-8c6e-1555a06ed894.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/17067540763601fc0a969-e752-45fa-8c6e-1555a06ed894.jpg',
                        is_deleted: 0,
                        updated_at: '2024-02-01 02:21:17',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/17067540763601fc0a969-e752-45fa-8c6e-1555a06ed894.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '260e6ad0-e32c-468a-95da-ca6b518d3ae3',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/1706754089472rn_image_picker_lib_temp_a7aa40fb-5db1-41ec-8a14-2cc0fd6bf561.jpg',
                        name: 'rn_image_picker_lib_temp_a7aa40fb-5db1-41ec-8a14-2cc0fd6bf561.jpg',
                        size: 735247,
                        type: 'image/jpeg',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706754089472rn_image_picker_lib_temp_a7aa40fb-5db1-41ec-8a14-2cc0fd6bf561.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/1706754089472rn_image_picker_lib_temp_a7aa40fb-5db1-41ec-8a14-2cc0fd6bf561.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706754089472rn_image_picker_lib_temp_a7aa40fb-5db1-41ec-8a14-2cc0fd6bf561.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/1706754089472rn_image_picker_lib_temp_a7aa40fb-5db1-41ec-8a14-2cc0fd6bf561.jpg',
                        orginName:
                          'rn_image_picker_lib_temp_a7aa40fb-5db1-41ec-8a14-2cc0fd6bf561.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706754089472rn_image_picker_lib_temp_a7aa40fb-5db1-41ec-8a14-2cc0fd6bf561.jpg',
                        is_deleted: 0,
                        updated_at: '2024-02-01 02:21:30',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/1706754089472rn_image_picker_lib_temp_a7aa40fb-5db1-41ec-8a14-2cc0fd6bf561.jpg',
                        isOriginUploaded: true,
                      },
                    ],
                    type: 'Media',
                    uuid: 'd48c6dec-60cc-4cde-b2e4-2995aea9d75c',
                    prompt: 'Media',
                    values: [],
                    created_at: '2024-01-31 18:49:10',
                    updated_at: '2024-01-31 18:49:10',
                    line_input_control_id: null,
                  },
                ],
              },
              {
                uuid: 'fdd3078b-19cb-4576-bc90-1fac00a2bbb6',
                order: 2,
                prompt: 'Trim',
                line_id: '73d69837-1c52-41c5-9c0a-6f6ee8af9392',
                comments: [
                  {
                    uuid: 'af4a3c44-5398-432e-a845-2acaf9fc71cc',
                    prompt: null,
                    comment_id: 'e2103f89-685d-40a3-9bf3-5f5438798684',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Damaged</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '95d178ea-e535-4b63-8dcb-56de31a22997',
                    prompt: null,
                    comment_id: '0845797d-f8b4-4d8e-8e44-330f18baade0',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Missing</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '22570cff-6d16-44cb-8210-c28f3a012dc9',
                    prompt: null,
                    comment_id: '311cf706-a953-4884-ac62-51992f7a11e9',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Wood rot</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '1b74b9ff-ec04-414f-b57e-3e2109d6f315',
                    prompt: null,
                    comment_id: '4bfabaa5-7f4e-4448-aa53-378266c7ec88',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Loose</p>',
                    comment_input_controls: [],
                  },
                ],
                optional: 0,
                is_deleted: 0,
                updated_at: '2023-10-16 12:18:06',
                line_input_controls: [
                  {
                    data: [],
                    type: 'Description',
                    uuid: '965ea77a-758e-4591-b477-377ea26a232b',
                    prompt: 'Description',
                    values: [
                      {
                        uuid: '3228e167-a202-41ca-954f-0f0485a93f8e',
                        value: 'Wood',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: 'ffb3cfa5-41d6-4f74-b368-2f49d94b4b79',
                        value: 'Plywood',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: 'ebe367a5-ebda-4110-aaf8-ca5133d286d2',
                        value: 'Particle board',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: 'aa3a43b5-c7c0-4076-8537-394f5a3314b9',
                        value: 'Composite material',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '3740c99d-119a-4e60-8ca0-04bfa2a88993',
                        value: 'Vinyl',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: 'b168257c-ec2c-4309-81cd-cbb61257d858',
                        value: 'Aluminum',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: 'e2a3ee03-5510-42ca-9b60-31c901b24418',
                        value: 'Fiberglass',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '31f8cbfd-a8bf-47c1-b141-31c64cd9444c',
                        value: 'Metal',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                    ],
                    updated_at: '2023-10-16 12:18:06',
                    line_input_control_id:
                      '555d31a9-5a0b-450e-b1a4-dabc1bd78bc6',
                  },
                  {
                    data: [
                      {
                        id: '565ecaf8-b54b-4c98-bb7c-e8a3fe852b0e',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/170673110457115003ebe-4c95-45e9-b64a-b6dcdaca3511.jpg',
                        name: '15003ebe-4c95-45e9-b64a-b6dcdaca3511.jpg',
                        size: 682315,
                        type: 'image/png',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/170673110457115003ebe-4c95-45e9-b64a-b6dcdaca3511.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/170673110457115003ebe-4c95-45e9-b64a-b6dcdaca3511.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/170673110457115003ebe-4c95-45e9-b64a-b6dcdaca3511.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/170673110457115003ebe-4c95-45e9-b64a-b6dcdaca3511.jpg',
                        orginName: '15003ebe-4c95-45e9-b64a-b6dcdaca3511.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/170673110457115003ebe-4c95-45e9-b64a-b6dcdaca3511.jpg',
                        is_deleted: 0,
                        updated_at: '2024-01-31 19:58:25',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/170673110457115003ebe-4c95-45e9-b64a-b6dcdaca3511.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '03b882e7-80f8-4008-a0f4-94cfed2d4513',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/17067324920762e4d5567-337d-4c0a-9a55-0f99bd3029b5.jpg',
                        name: '2e4d5567-337d-4c0a-9a55-0f99bd3029b5.jpg',
                        size: 532622,
                        type: 'image/png',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/17067324920762e4d5567-337d-4c0a-9a55-0f99bd3029b5.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/17067324920762e4d5567-337d-4c0a-9a55-0f99bd3029b5.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/17067324920762e4d5567-337d-4c0a-9a55-0f99bd3029b5.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/17067324920762e4d5567-337d-4c0a-9a55-0f99bd3029b5.jpg',
                        orginName: '2e4d5567-337d-4c0a-9a55-0f99bd3029b5.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/17067324920762e4d5567-337d-4c0a-9a55-0f99bd3029b5.jpg',
                        is_deleted: 0,
                        updated_at: '2024-01-31 20:21:33',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/17067324920762e4d5567-337d-4c0a-9a55-0f99bd3029b5.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: '1beb0762-3af0-460e-b310-9e80bf3376e1',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/17067343046134d9b1637-56cd-48de-8cc6-2a2e21b800c2.jpg',
                        name: '4d9b1637-56cd-48de-8cc6-2a2e21b800c2.jpg',
                        size: 668509,
                        type: 'image/png',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/17067343046134d9b1637-56cd-48de-8cc6-2a2e21b800c2.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/17067343046134d9b1637-56cd-48de-8cc6-2a2e21b800c2.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/17067343046134d9b1637-56cd-48de-8cc6-2a2e21b800c2.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/17067343046134d9b1637-56cd-48de-8cc6-2a2e21b800c2.jpg',
                        orginName: '4d9b1637-56cd-48de-8cc6-2a2e21b800c2.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/17067343046134d9b1637-56cd-48de-8cc6-2a2e21b800c2.jpg',
                        is_deleted: 0,
                        updated_at: '2024-01-31 20:51:46',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/17067343046134d9b1637-56cd-48de-8cc6-2a2e21b800c2.jpg',
                        isOriginUploaded: true,
                      },
                    ],
                    type: 'Media',
                    uuid: '87f592f3-b1c6-4957-885a-d6a577248b1f',
                    prompt: 'Media',
                    values: [],
                    created_at: '2024-01-31 19:58:24',
                    updated_at: '2024-01-31 19:58:24',
                    line_input_control_id: null,
                  },
                ],
              },
              {
                uuid: '7d6b7027-c735-41f8-833b-5744b05a42dd',
                order: 3,
                prompt: 'Fascia',
                line_id: 'a74d9a3e-2c94-47f1-ae31-f1f4865406b4',
                comments: [
                  {
                    uuid: '05ef5fb7-d8af-4218-acab-f7dc4c24fcc4',
                    prompt: null,
                    comment_id: '2400ee1a-d5de-4ad6-b0e2-e9f185eb15b7',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Paint peeling</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '9bf92d14-3608-40a6-87a1-3829d82b69e9',
                    prompt: null,
                    comment_id: '5fe26a69-276a-4f2b-9e34-29c097f892b1',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Wood rot</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '74c7badf-e131-4ee2-80c2-c82a09e358b2',
                    prompt: null,
                    comment_id: '1a4a951f-03bf-451f-95fd-cd8d1cfadc99',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Loose</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '1090e192-cda3-4270-bb6c-c112a7b3dced',
                    prompt: null,
                    comment_id: '0116c456-5d16-4b7f-a9f8-0a4cd63fc4ff',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Penetrations</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: 'f9dc267f-e926-4b35-bb9b-d89395608828',
                    prompt: null,
                    comment_id: 'da51cfe9-4ea1-4e3a-8f63-c8d4dc66e603',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Needs to be replaced</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '46fe5141-0ef2-4c35-9860-9176055d8ab1',
                    prompt: null,
                    comment_id: '7855584f-8089-43c7-905e-8f3353ce927e',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation:
                      '<p>Covered by siding, unable to inspect the underlying wood</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: 'b2d05f81-6521-460b-9019-e8e675c3cc94',
                    prompt: null,
                    comment_id: '7d202ab0-fbe0-4874-a834-a258ea7a4469',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Damaged</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '4de3e334-aff9-4cae-bcb5-4059ce079e98',
                    prompt: null,
                    comment_id: '816c1d88-4c3a-48fc-b396-cf6fdc269faf',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation:
                      '<p>A qualified contractor is recommended to evaluate and estimate repairs</p>',
                    comment_input_controls: [],
                  },
                ],
                optional: 0,
                is_deleted: 0,
                updated_at: '2023-10-16 12:18:06',
                line_input_controls: [
                  {
                    data: [],
                    type: 'Description',
                    uuid: 'c8b97062-7d9c-4292-a759-9ad448566d99',
                    prompt: 'Description',
                    values: [
                      {
                        uuid: '8ae5b261-e8a2-4de0-98a0-df848d93c0a2',
                        value: 'Wood',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '91f666df-2015-4bf5-a117-682ba20f13fd',
                        value: 'Plywood',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '48e498ad-0bbe-47c3-9959-fce8b3df9799',
                        value: 'Particle board',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '402cf8b8-846a-4473-aca6-0540d9a45813',
                        value: 'Composite material',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '4e7ce98e-1f52-4f1a-9fda-ac9383bd77be',
                        value: 'Vinyl',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '77f898c2-6724-4418-a26e-95b25e0530a2',
                        value: 'Aluminum',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '79133e64-73f0-4509-8a6f-f14be8d276d9',
                        value: 'Fiberglass',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '86a661ef-440a-4e91-b8ae-f85c96577301',
                        value: 'Metal',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                    ],
                    updated_at: '2023-10-16 12:18:06',
                    line_input_control_id:
                      '5d6a687c-4e75-4af6-b4b6-64a57b95d55a',
                  },
                  {
                    data: [
                      {
                        id: '55b597bb-4d85-45a5-9e9d-7d1306dce0a6',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/170673452321585a4377e-33ab-4e95-b48f-6d63bea158e6.jpg',
                        name: '85a4377e-33ab-4e95-b48f-6d63bea158e6.jpg',
                        size: 668395,
                        type: 'image/png',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/170673452321585a4377e-33ab-4e95-b48f-6d63bea158e6.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/170673452321585a4377e-33ab-4e95-b48f-6d63bea158e6.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/170673452321585a4377e-33ab-4e95-b48f-6d63bea158e6.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/170673452321585a4377e-33ab-4e95-b48f-6d63bea158e6.jpg',
                        orginName: '85a4377e-33ab-4e95-b48f-6d63bea158e6.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/170673452321585a4377e-33ab-4e95-b48f-6d63bea158e6.jpg',
                        is_deleted: 0,
                        updated_at: '2024-01-31 20:55:23',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/170673452321585a4377e-33ab-4e95-b48f-6d63bea158e6.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: 'b2d428e9-6e40-4f46-bc23-06fa6c0d578d',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/170673494390481e58761-7886-486d-94ac-27f7d912c647.jpg',
                        name: '81e58761-7886-486d-94ac-27f7d912c647.jpg',
                        size: 667681,
                        type: 'image/png',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/170673494390481e58761-7886-486d-94ac-27f7d912c647.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/170673494390481e58761-7886-486d-94ac-27f7d912c647.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/170673494390481e58761-7886-486d-94ac-27f7d912c647.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/170673494390481e58761-7886-486d-94ac-27f7d912c647.jpg',
                        orginName: '81e58761-7886-486d-94ac-27f7d912c647.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/170673494390481e58761-7886-486d-94ac-27f7d912c647.jpg',
                        is_deleted: 0,
                        updated_at: '2024-01-31 21:02:24',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/170673494390481e58761-7886-486d-94ac-27f7d912c647.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: 'e21f0391-61be-4bfa-bb66-2dcf9f903f26',
                        url: 'file:///data/user/0/com.palmtech.year2023/files/14580/17067354876132b5bd1c2-d80f-4849-a2f7-f3c5bfe55a17.jpg',
                        name: '2b5bd1c2-d80f-4849-a2f7-f3c5bfe55a17.jpg',
                        size: 660969,
                        type: 'image/png',
                        edited: false,
                        newUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/17067354876132b5bd1c2-d80f-4849-a2f7-f3c5bfe55a17.jpg',
                        online: 'online',
                        filetype: 'image',
                        localUrl:
                          'file:///data/user/0/com.palmtech.year2023/files/14580/17067354876132b5bd1c2-d80f-4849-a2f7-f3c5bfe55a17.jpg',
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/17067354876132b5bd1c2-d80f-4849-a2f7-f3c5bfe55a17.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/17067354876132b5bd1c2-d80f-4849-a2f7-f3c5bfe55a17.jpg',
                        orginName: '2b5bd1c2-d80f-4849-a2f7-f3c5bfe55a17.jpg',
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/17067354876132b5bd1c2-d80f-4849-a2f7-f3c5bfe55a17.jpg',
                        is_deleted: 0,
                        updated_at: '2024-01-31 21:11:28',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/17067354876132b5bd1c2-d80f-4849-a2f7-f3c5bfe55a17.jpg',
                        isOriginUploaded: true,
                      },
                      {
                        id: 'd7c1ee33-f945-42d9-9b81-9b8b1c9cbf25',
                        url: null,
                        name: '1706590983_b63e751a-05cb-4cb3-8d96-df307f8367b3.jpg',
                        size: 82399,
                        type: 'image/jpeg',
                        order: 3,
                        edited: false,
                        newUrl: null,
                        online: 'online',
                        filetype: 'image',
                        localUrl: null,
                        OriginUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/dc45a112-4e69-43b2-8922-003459b84772.jpg',
                        editCount: 0,
                        onlineUrl:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/images/dc45a112-4e69-43b2-8922-003459b84772.jpg',
                        orginName: null,
                        thumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/4a9665ca-deb8-4245-a1a3-48b640a06c2d.jpg',
                        is_deleted: 0,
                        updated_at: '2024-01-31 22:01:15',
                        description: null,
                        OriginlocalUrl: null,
                        OriginThumbnail:
                          '1/5a756d6c-112a-4d76-9de6-5f03c8d1c8d8/75993/thumbnails/4a9665ca-deb8-4245-a1a3-48b640a06c2d.jpg',
                        isOriginUploaded: true,
                      },
                    ],
                    type: 'Media',
                    uuid: '0d6e823a-e143-430f-ac9e-2580d9ab3502',
                    prompt: 'Media',
                    values: [],
                    created_at: '2024-01-31 20:55:23',
                    updated_at: '2024-01-31 20:55:23',
                    line_input_control_id: null,
                  },
                ],
              },
              {
                uuid: 'aa4c48ff-462c-45b8-aaa4-ba2e42989f1e',
                order: 4,
                prompt: 'Soffits',
                line_id: 'ab0bde4d-9a1a-42ab-a17e-737cb58899c7',
                comments: [
                  {
                    uuid: '26e936cd-ecc4-449d-8341-51395e2cb6f2',
                    prompt: null,
                    comment_id: '88f0fc89-0087-4e6a-a7c3-442802d63a57',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Damaged</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '50044288-ddc0-49d2-a216-61a60fac05d8',
                    prompt: null,
                    comment_id: 'aa229455-521c-4033-b078-050dc093ff2c',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Missing</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: '91aa47d5-fdfe-49b4-bd80-c0035d239623',
                    prompt: null,
                    comment_id: '277dedae-e1fd-4a9a-bae4-6c5275c7339f',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Wood rot</p>',
                    comment_input_controls: [],
                  },
                  {
                    uuid: 'aa652b7d-7ffe-45b6-865e-0e982fe34d16',
                    prompt: null,
                    comment_id: '99ba1723-c3b4-49c5-af6b-d4b28c5e7da8',
                    is_deleted: 0,
                    updated_at: '2023-10-16 12:18:06',
                    is_selected: false,
                    recommendation: '<p>Loose</p>',
                    comment_input_controls: [],
                  },
                ],
                optional: 0,
                is_deleted: 0,
                updated_at: '2023-10-16 12:18:06',
                line_input_controls: [
                  {
                    data: [],
                    type: 'Description',
                    uuid: 'a85d3231-d4d1-4fe8-9807-527411ce7e55',
                    prompt: 'Description',
                    values: [
                      {
                        uuid: 'b7568e10-09f6-4a9f-9515-b6a6c145be58',
                        value: 'Wood',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: 'a48ff91a-0351-4b21-9c17-0cccd24e237f',
                        value: 'Plywood',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '238b7b98-a217-441f-954a-5f0ba4000ae1',
                        value: 'Particle board',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '2566b724-6772-43cc-bfa7-3faa7dc8f9fb',
                        value: 'Composite material',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: 'ba160325-1f9a-445d-85d7-d3bcec806483',
                        value: 'Vinyl',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '9050b2c6-304e-409a-a21a-4bc668f24fc5',
                        value: 'Aluminum',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: 'f418859e-21f8-45b4-b997-4266f58d29aa',
                        value: 'Fiberglass',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                      {
                        uuid: '7299e56d-291c-4324-9251-231d4283dc2f',
                        value: 'Metal',
                        is_deleted: 0,
                        updated_at: '2023-10-16 12:18:06',
                        is_selected: false,
                      },
                    ],
                    updated_at: '2023-10-16 12:18:06',
                    line_input_control_id:
                      '40904a0a-b2d4-4a8d-ab0c-de941c3f35f2',
                  },
                ],
              },
            ],
            parent_uuid: '4969aa46-0e3b-43fa-8381-1e57fbe5efe3',
            order: 1,
            is_deleted: 1,
            optional: 0,
            is_inspection_details: 0,
            updated_at: '2024-02-02T17:48:55.000000Z',
            is_selected: false,
          },
          {
            id: 979676,
            uuid: '76e9b803-364c-4d78-bd07-12333ff0e281',
            template_id: 79286,
            prompt: 'Exterior',
            introductory_text: null,
            lines: [],
            parent_uuid: '76e9b803-364c-4d78-bd07-12333ff0e281',
            order: 2,
            is_deleted: 1,
            optional: 0,
            is_inspection_details: 0,
            updated_at: '2024-02-02T17:48:55.000000Z',
            is_selected: false,
          },
          {
            id: 979677,
            uuid: 'de413982-08aa-4b00-ab77-d796413f9ae8',
            template_id: 79286,
            prompt: 'Roof',
            introductory_text: null,
            lines: [],
            parent_uuid: 'de413982-08aa-4b00-ab77-d796413f9ae8',
            order: 3,
            is_deleted: 1,
            optional: 0,
            is_inspection_details: 0,
            updated_at: '2024-02-02T17:48:55.000000Z',
            is_selected: false,
          },
        ],
      },
    ],
    deletedInspectionTemplates: [],
    user_id: 1,
    company: {
      id: 1,
      is_agreement_enable: 1,
      is_payment_enable: 1,
      logo: 'https://cloudfront.portal.palmtech.dev/company_logo/palmtech-email-logo.png',
      company_name: 'Chabungbam Home Inspections',
      subscription_start_date: '',
      is_subscription_active: 0,
      subscription_type: 'Trial',
    },
    role_id: 5,
    user_displayname: 'Sanju Chabungbam',
    user_email: 'nxtgnowner@gmail.com',
    location_address: 'Online1 abhi',
    location_address_2: null,
    location_city: 'Scottsdale',
    location_state: 'AZ',
    location_zip: '85255',
    is_agreement_signed: 0,
    paid: 0,
    order_status: 'In-Progress',
    publish_date: null,
    order_id: 14580,
    total_agreements: 1,
    api_key: '1',
    secret_key: '7b829a23-7792-4ab2-b54b-a0227d15ffd2',
  };

  const [lineInputControlValues, setLineInputControlValues] = useState([]);

  const [offline, setOffline] = useState(false);

  const dataRead = () => {
    database()
      .ref(
        '/data/inspectiontemplates/0/categories/0/lines/0/line_input_controls/0/values',
      )
      .on('value', snapshot => {
        const response = snapshot.val();

        if (response != null) {
         // console.log('response', response);
          //  const arrayOfObjects = Object.values(response.stages);
          setLineInputControlValues(response);
        }
       // console.log('data: ', snapshot.val());
      });
  };

  const updateData = (index, value)=>{
    //database().goOnline();
    const dataRef = database().ref(`/data/inspectiontemplates/0/categories/0/lines/0/line_input_controls/0/values/${index}`);

    console.log(index, value);
    
    dataRef.update({
    is_selected: !value,
    })
    .then(() => console.log('Data updated.'));

    if(offline){
      console.log("offline operaton");
    database()
      .goOffline()
      .then(() => {
        return  dataRef.update({
          is_selected: !value,
          })
      })
      .then(() => {
        console.log('User updated whilst offline.');
      });
    }
    
  }

  const dataPersist = ()=>{
    const userAgeRef = database().ref('/users/123/age');

    userAgeRef.on('value', snapshot => {
      console.log('Users age: ', snapshot.val());
    });

    database()
      .goOffline()
      .then(() => {
        return userAgeRef.set("54");
      })
      .then(() => {
        console.log('User updated whilst offline.');
      });
  }

  useEffect(() => {
    dataRead();
  }, []);

  // const setData = ()=>{
  //    database()
  //   .ref('/data')
  //   .set(data)
  //   .then(() => console.log('Data set.'));
  // }

  return (
    <View>
      <Text>Home</Text>
      <FlatList
        data={lineInputControlValues}
        renderItem={({item,index}) => (
          <TouchableOpacity onPress={()=>updateData(index,item.is_selected)}>
            {item.is_selected ? (
              <View style={{flexDirection:'row'}}>
                <Icon name="check-box" size={30} color="#0d1b82" />
                <Text style={{fontSize:17, color:'#0d1b82'}}>{item.value}</Text>
                <Text style={{fontSize:17, color:'red'}}>{String(item.is_selected)}</Text>
              </View>
            ) : (
              <View style={{flexDirection:'row'}}>
                <Icon name="check-box-outline-blank" size={30} color="#0d1b82" />
                <Text style={{fontSize:17, color:'#0d1b82'}}>{item.value}</Text>
                <Text style={{fontSize:17, color:'red'}}>{String(item.is_selected)}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}></FlatList>
        {/* <TouchableOpacity onPress={()=>dataPersist()}><Text style={{fontWeight:500,fontSize:18, color:'black'}}>Testing</Text></TouchableOpacity> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
