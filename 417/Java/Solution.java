import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Set;
import java.util.stream.Collectors;

public class Solution {
    public static void main(String[] args) {
        record TestCase(int[][] input, List<List<Integer>> expected) {}

        TestCase[] tests = new TestCase[] {
            new TestCase(new int[][] {{1,2,2,3,5},{3,2,3,4,4},{2,4,5,3,1},{6,7,1,4,5},{5,1,1,2,4}}, 
                Arrays.asList(
                    Arrays.asList(0, 4),
                    Arrays.asList(1, 3),
                    Arrays.asList(1, 4),
                    Arrays.asList(2, 2),
                    Arrays.asList(3, 0),
                    Arrays.asList(3, 1),
                    Arrays.asList(4, 0)
                )),
            new TestCase(new int[][] {{1}}, Arrays.asList(Arrays.asList(0, 0)))
        };

        Solution s = new Solution();
        for(TestCase t : tests) {
        	Set<Set<Integer>> result = s.pacificAtlantic(t.input()).stream()
        	        .map(HashSet::new)
        	        .collect(Collectors.toSet());
        	Set<Set<Integer>> expected = t.expected().stream()
        	        .map(HashSet::new)
        	        .collect(Collectors.toSet());
        	
			assert result.equals(expected) : String.format("pacificAtlantic(%s) == %s, expected %s", Arrays.deepToString(t.input()), result.toString(), t.expected().toString()); 
        }

    }

    public record Cell(int x, int y, int h) {};
    public record Point(int x, int y) {};
    
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
    	if(heights.length==0) return null;
    	
        Set<Point> validPacific = new HashSet<>(), validAtlantic = new HashSet<>();
        Queue<Cell> initialCellsPacific = new LinkedList<>(), initialCellsAtlantic = new LinkedList<>();

        int xlen = heights.length;
        int ylen = heights[0].length;
        
        for(int i=0; i<ylen; i++) {
        	initialCellsPacific.add(new Cell(0,i,heights[0][i]));
        	initialCellsAtlantic.add(new Cell(xlen-1,i,heights[xlen-1][i]));
        }
        for(int i=0; i<xlen; i++) {
        	initialCellsPacific.add(new Cell(i,0,heights[i][0]));
        	initialCellsAtlantic.add(new Cell(i,ylen-1,heights[i][ylen-1]));
        }

        validPacific = getValidCells(initialCellsPacific, heights);
        validAtlantic = getValidCells(initialCellsAtlantic, heights);
        
        validPacific.retainAll(validAtlantic);
        
        List<List<Integer>> results = new ArrayList<>();
        for(Point p : validPacific) {
        	List<Integer> r = Arrays.asList(p.x(), p.y());
        	results.add(r);
        }
                
        return results;

    }
    
    public Set<Point> getValidCells(Queue<Cell> cells, int[][] heights) {
    	Set<Point> visited = new HashSet<>();
		List<Point> allowedMovements = Arrays.asList(new Point(0, 1), new Point(0, -1), new Point(1, 0), new Point(-1, 0));
        int xlen = heights.length;
        int ylen = heights[0].length;
        
        while(!cells.isEmpty()) {
        	Cell current = cells.poll();
        	Point currentPoint = new Point(current.x(), current.y());
        	
        	if(!visited.contains(currentPoint)) {
        		for(Point movement : allowedMovements) {
        			int nx = current.x() + movement.x();
        			int ny = current.y() + movement.y();
        			if(nx < 0 || nx >= xlen || ny < 0 || ny >= ylen) continue;
        			if(heights[nx][ny]>=current.h())
        				cells.add(new Cell(nx,ny,heights[nx][ny]));
        		}
        		visited.add(currentPoint);
        	}
        }
        
        return visited;
    }
   
}
