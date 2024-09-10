package com.ujcms.core.mapper;

import com.ujcms.core.domain.SiteTree;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * 站点树形结构 Mapper
 *
 * @author PONY
 */
@Mapper
@Repository
public interface SiteTreeMapper {
    /**
     * 插入数据
     *
     * @param bean 实体对象
     * @return 插入条数
     */
    int insert(SiteTree bean);

    /**
     * 删除数据
     *
     * @param ancestorId   祖先ID
     * @param descendantId 后代ID
     * @return 删除条数
     */
    int delete(@Param("ancestorId") Integer ancestorId, @Param("descendantId") Integer descendantId);

    /**
     * 删除数据
     *
     * @param id 主键ID
     * @return 删除条数
     */
    int deleteById(Integer id);

    /**
     * 移出数据
     *
     * @param id 待移出的ID
     * @return 删除条数
     */
    int move(Integer id);

    /**
     * 移入数据
     *
     * @param id       待移入的ID
     * @param parentId 移动到父节点ID
     * @return 插入条数
     */
    int append(@Param("id") Integer id, @Param("parentId") int parentId);

    /**
     * 加入数据
     *
     * @param id       待加入的ID
     * @param parentId 加入到父节点ID
     * @return 插入条数
     */
    int add(@Param("id") Integer id, @Param("parentId") int parentId);
}